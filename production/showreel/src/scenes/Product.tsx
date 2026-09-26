import React from 'react';
import {AbsoluteFill, Sequence, staticFile} from 'remotion';
import {Video} from '@remotion/media';
export const Product = () => <AbsoluteFill>
  <Sequence from={0} durationInFrames={60}><Video src={staticFile('aurelia-wellness.mp4')} trimBefore={6} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/></Sequence>
  <Sequence from={60} durationInFrames={48}><Video src={staticFile('aurelia-wellness.mp4')} trimBefore={72} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/></Sequence>
  <Sequence from={108} durationInFrames={84}><Video src={staticFile('aurelia-wellness.mp4')} trimBefore={204} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/></Sequence>
  <div style={{position:'absolute',left:48,top:34,fontFamily:'Arial',fontSize:17,letterSpacing:3,color:'#fff',textShadow:'0 1px 10px #000'}}>AURELIA / КОНЦЕПТ</div>
</AbsoluteFill>;
