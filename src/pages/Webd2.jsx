import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { webd2Text } from '../data/webd2'

const Webd2 = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webd2PageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "tuki. 🩶"
            description="tukiの歌です。">

            <section id='webd2Page' className={webd2PageClass}>
                <h2>🌙 tuki.</h2>
                <div className="video__inner">
                    <VideoCards videos={webd2Text} />
                </div>
            </section>
        </Main>
    )
}

export default Webd2