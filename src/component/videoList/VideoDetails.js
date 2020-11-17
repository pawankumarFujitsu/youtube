import React from 'react';

const VideoDetails=(props)=>{

    if(!props.videoTitles)
    {
        return "loding..";
    }
    const srcFrame = `https://www.youtube.com/embed/${props.videoTitles.id.videoId}`;
    return (
       
        <div>
            <div className="ui embed">
                <iframe src={srcFrame}></iframe>
            </div>
            <div className="ui segment">
                <h4>{props.videoTitles.title}</h4>
                <p>{props.videoTitles.description}</p>
            </div>
            
        </div>
    );
}
export default VideoDetails;