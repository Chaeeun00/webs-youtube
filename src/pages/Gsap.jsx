import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "一日10分日本語 🩶"
            description="一日10分日本語です。">
            
            <section id='gsapPage' className={gsapPageClass}>
                <h2>🌸 하루 10분 일본어</h2>
                <div className="video__inner">
                    <VideoCards videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Gsap