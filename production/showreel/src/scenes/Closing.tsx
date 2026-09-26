import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, staticFile} from 'remotion';
import {loadFont} from '@remotion/fonts';

const fontsReady = Promise.all([
  loadFont({family:'Manrope', url:staticFile('manrope-latin.woff2'), weight:'100 900'}),
  loadFont({family:'Manrope', url:staticFile('manrope-cyrillic.woff2'), weight:'100 900'}),
]);
export const Closing = () => {
  const frame=useCurrentFrame();
  return <AbsoluteFill style={{backgroundColor:'#0c0d0c',color:'#f1eee7',alignItems:'center',justifyContent:'center',fontFamily:'Manrope'}}>
    <div style={{fontSize:80,fontWeight:600,letterSpacing:27.2,paddingLeft:27.2,lineHeight:0.85,opacity:interpolate(frame,[0,20],[0,1],{extrapolateRight:'clamp'})}}>MILLER</div>
    <div style={{fontSize:21,fontWeight:500,letterSpacing:3.99,paddingLeft:3.99,marginTop:28,textTransform:'uppercase',opacity:interpolate(frame,[12,32],[0,0.68],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>Visual Production Studio</div>
    <div style={{fontSize:19,letterSpacing:2,marginTop:54,color:'#b5b4ab',opacity:interpolate(frame,[24,44],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>Обсудим ваш проект · @spartak19876</div>
  </AbsoluteFill>;
};
