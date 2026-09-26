import React from 'react';
import {AbsoluteFill, staticFile} from 'remotion';
import {Video} from '@remotion/media';
export const Residential = () => <AbsoluteFill>
  <Video src={staticFile('development-residential.mp4')} muted style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div style={{position:'absolute',left:48,top:34,fontFamily:'Arial',fontSize:17,letterSpacing:3,color:'#fff',textShadow:'0 1px 10px #000'}}>RESIDENTIAL / КОНЦЕПТ</div>
</AbsoluteFill>;
