import React from 'react';
import './videoitem.css';
import ReactDOM from 'react-dom';
const VideoItem = ({ video,OnVideoSelect }) => {
    return (

        <div onClick={()=>OnVideoSelect(video)}className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>

            </div>
        </div>
    )
}
export default VideoItem; 