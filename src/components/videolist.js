import React from 'react';
import ReactDOM from 'react-dom';
import VideoItem from './videoItem'
const VideoList = ({ videos,OnVideoSelect }) => {
    const renderedlist = videos.map((video) => {
        return <VideoItem
        key={video.id.videoId} 
        OnVideoSelect={OnVideoSelect}
        video={video} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedlist}
        </div>
    )
}
export default VideoList