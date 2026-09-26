import React from 'react';
import {AbsoluteFill, Composition, Sequence, staticFile, interpolate} from 'remotion';
import {Audio} from '@remotion/media';
import {Product} from './scenes/Product';
import {Residential} from './scenes/Residential';
import {Healthcare} from './scenes/Healthcare';
import {Closing} from './scenes/Closing';

const Showreel = () => <AbsoluteFill style={{backgroundColor:'#0c0d0c'}}>
  <Sequence name="AURELIA · Продукт" from={0} durationInFrames={192}><Product/></Sequence>
  <Sequence name="Residential · Пространство" from={192} durationInFrames={168}><Residential/></Sequence>
  <Sequence name="Healthcare · Услуга" from={360} durationInFrames={216}><Healthcare/></Sequence>
  <Sequence name="MILLER · Финал" from={576} durationInFrames={144}><Closing/></Sequence>
  <Audio src={staticFile('Majestic.mp3')} durationInFrames={720} volume={f=>interpolate(f,[0,18,648,719],[0,0.65,0.65,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}/>
</AbsoluteFill>;
export const Root = () => <Composition id="MillerShowreel" component={Showreel} width={1280} height={720} fps={24} durationInFrames={720}/>;
