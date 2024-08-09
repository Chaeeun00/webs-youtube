import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { websiteText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "아따맘마(あたしんち）"
            description="あたしんちです。">
            
            <section id='websitePage' className={websitePageClass}>
                <h2>📚 아따맘마로 일본어 공부하기</h2>
                <div className="video__inner">
                    <VideoCards videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website