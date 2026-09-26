// Existing-footage soundtrack edit; no video re-encoding or generation.
// Usage: node production/music/render.mjs /absolute/path/to/downloaded-inputs
import {execFileSync, spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {dirname, resolve, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const input = resolve(process.argv[2] || '.');
const assets = join(root, 'assets');
const jobs = [
  {id:'product-fmcg', music:'summer-fun.mp3', from:0, fadeIn:0.45, fadeOut:1.6, title:'Summer Fun', artist:'Ahjay Stelino', url:'https://assets.mixkit.co/music/13/13.mp3'},
  {id:'development-residential', music:'forest-mist-whispers.mp3', from:8, fadeIn:0.45, fadeOut:1.4, title:'Forest Mist Whispers', artist:'Alejandro Magaña (A. M.)', url:'https://assets.mixkit.co/music/148/148.mp3'},
  {id:'healthcare-heart', music:'pilates-and-yoga.mp3', from:0, fadeIn:0.8, fadeOut:2.5, title:'Pilates and Yoga', artist:'Arulo', url:'https://assets.mixkit.co/music/419/419.mp3'},
  {id:'healthcare-forest', music:'relaxation-05.mp3', from:4, fadeIn:0.8, fadeOut:2.5, title:'Relaxation 05', artist:'Lily J', url:'https://assets.mixkit.co/music/749/749.mp3'},
];
const probe = path => JSON.parse(execFileSync('ffprobe', ['-v','error','-show_format','-show_streams','-of','json',path], {encoding:'utf8'}));
const hash = path => createHash('sha256').update(readFileSync(path)).digest('hex');
const videoHash = path => execFileSync('ffmpeg', ['-v','error','-i',path,'-map','0:v:0','-c:v','copy','-f','hash','-hash','sha256','-'], {encoding:'utf8'}).trim();
const run = args => {
  const r = spawnSync('ffmpeg', ['-hide_banner','-nostdin',...args], {encoding:'utf8', maxBuffer:4e6});
  if (r.status !== 0) throw new Error(r.stderr);
  return r.stderr;
};
const measures = log => JSON.parse(log.slice(log.lastIndexOf('{'), log.lastIndexOf('}')+1));
const results = [];
mkdirSync(assets, {recursive:true});
for (const job of jobs) {
  const source = join(input, `${job.id}.mp4`);
  const music = join(input, job.music);
  const output = join(assets, `${job.id}-music.mp4`);
  if (existsSync(output)) throw new Error(`Refusing to overwrite ${output}`);
  const before = probe(source);
  const duration = Number(before.streams.find(s=>s.codec_type==='video').duration);
  const base = `atrim=start=${job.from}:duration=${duration},asetpts=PTS-STARTPTS`;
  const norm = 'loudnorm=I=-20:LRA=7:TP=-2';
  const m = measures(run(['-i',music,'-af',`${base},${norm}:print_format=json`,'-f','null','-']));
  const measured = `:measured_I=${m.input_i}:measured_LRA=${m.input_lra}:measured_TP=${m.input_tp}:measured_thresh=${m.input_thresh}:offset=${m.target_offset}:linear=true`;
  const fade = `afade=t=in:st=0:d=${job.fadeIn},afade=t=out:st=${duration-job.fadeOut}:d=${job.fadeOut}`;
  run(['-i',source,'-i',music,'-map','0:v:0','-map','1:a:0','-map_metadata','-1','-c:v','copy',
    '-af',`${base},${norm}${measured},${fade}`,'-c:a','aac','-b:a','192k','-ar','48000','-ac','2',
    '-t',String(duration),'-movflags','+faststart',output]);
  const after = probe(output);
  const audio = measures(run(['-i',output,'-map','0:a:0','-af',`${norm}:print_format=json`,'-f','null','-']));
  const decodeErrors = run(['-v','error','-i',output,'-f','null','-']);
  if (decodeErrors.trim()) throw new Error(decodeErrors);
  const sourceHash = videoHash(source);
  const outputHash = videoHash(output);
  if (sourceHash !== outputHash) throw new Error(`Video changed: ${job.id}`);
  if (Number(audio.input_tp)>-1) throw new Error(`Unsafe audio peak: ${job.id}`);
  const outVideo = after.streams.find(s=>s.codec_type==='video');
  const inVideo = before.streams.find(s=>s.codec_type==='video');
  if (outVideo.nb_frames !== inVideo.nb_frames || outVideo.duration !== inVideo.duration) throw new Error(`Timing changed: ${job.id}`);
  const result = {...job, output:`assets/${job.id}-music.mp4`, duration, frames:outVideo.nb_frames,
    sizeBytes:Number(after.format.size), musicSha256:hash(music), outputSha256:hash(output),
    videoPacketHash:outputHash, videoUnchanged:true, audioIntegratedLUFS:Number(audio.input_i),
    audioTruePeakDbTP:Number(audio.input_tp), decodeErrors:false};
  results.push(result);
  console.log(JSON.stringify(result));
}
writeFileSync(join(here,'verification.json'), JSON.stringify({date:'2026-09-26',license:'https://mixkit.co/license/modal/musicFree/',results},null,2)+'\n');
