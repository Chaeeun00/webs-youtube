import React from 'react'

import { webd2Text } from '../../data/webd'
import { Link } from 'react-router-dom'

const webd2 = () => {
  return (
    <section id='webd2'>
      <h2>🌙 tuki.</h2>
      <div className='video__inner'>
        {webd2Text.map((video, key) => (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default webd2
