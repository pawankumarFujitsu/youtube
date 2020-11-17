import React from 'react';
import VideoItems from './VideoItems';

const VideoFrame = (props)=>{
    const items =  props.videos.map(video =>{
        return <VideoItems onVideoSelect={props.onVideoSelect} videoList = {video}/>
    })
    return <div className="ui list">{items}</div>;
}

export default VideoFrame;