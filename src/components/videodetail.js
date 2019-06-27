import React from 'react';
import ReactDOM from 'react-dom';
const VideoDetail=({video})=>{
    if(!video){
        return <div>Loading...</div>
    }
    const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <div>
            <div className="ui embed">
            <iframe src={videosrc}/>
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}
export default VideoDetail