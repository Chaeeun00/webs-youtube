import React from 'react'
import { Link } from 'react-router-dom'

const VideoCards = ({ videos }) => {
    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.videoId}`}>
                            <img src={video.img} alt={videos.title} />
                            <h3 className="video-title">{video.title}</h3>
                        </Link>
                    </div>
                    
                </div>
            ))}
        </>
    )
}

export default VideoCards