import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🩶"
            description="𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭">

            <section id='youtubePage' className={youtubePageClass}>
                <h2>🤍 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭</h2>
                <div className="video__inner">
                    <VideoCards videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube