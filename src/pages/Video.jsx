import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import ReactPlayer from 'react-player';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Video = () => {
    const { videoId } = useParams();
    const [videoDetail, setVideoDetail] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideoDetail = async () => {
            try {
                const response = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    setVideoDetail(data.items[0]);
                } else {
                    setError('비디오를 찾을 수 없습니다.');
                }
            } catch (error) {
                console.error('Error fetching video details:', error);
                setError('비디오 정보를 불러오는 중 오류가 발생했습니다.');
            }
        };

        fetchVideoDetail();
    }, [videoId]);

    return (
        <Main 
            title="유튜브 영상"
            description="유튜브 영상을 볼 수 있습니다."
        >
            <section id='videoViewPage'>
                {error && <p className="error">{error}</p>}
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer 
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`} 
                                width='100%' 
                                height='100%' 
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>
                                {videoDetail.snippet.title}
                            </h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <a href={`https://www.youtube.com/channel/${videoDetail.snippet.channelId}`} target='_blank' rel='noopener noreferrer'>
                                        {videoDetail.snippet.channelTitle}
                                    </a>
                                </div>
                                <div className='count'>
                                    <span className='view'><CiRead /> {videoDetail.statistics.viewCount}</span>
                                    <span className='like'><CiStar /> {videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><CiChat1 /> {videoDetail.statistics.commentCount || '댓글 없음'}</span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
}

export default Video;