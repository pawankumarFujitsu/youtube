import React from 'react';
import './VideoList.css';

const VideoItems = ({videoList,onVideoSelect}) => {
    return (
        <div onClick = {()=>onVideoSelect(videoList)} className="video-item item">
            <img className="ui image" src={videoList.snippet.thumbnails.medium.url}/>
            <div className="content">
                <a className="header">{videoList.snippet.title}</a>
                
            </div>
        </div>          
    );
}
            
export default VideoItems;