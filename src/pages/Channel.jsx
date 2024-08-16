import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import { CiBadgeDollar, CiMedal, CiRead } from "react-icons/ci";

const Channel = () => {
    const { channelId } = useParams(); // URL 파라미터에서 채널 ID를 가져옵니다.
    const [channelDetail, setChannelDetail] = useState(null); // 채널 정보를 저장할 상태.
    const [videos, setVideos] = useState([]); // 동영상 목록을 저장할 상태.
    const [loading, setLoading] = useState(true); // 로딩 상태를 관리.
    const [error, setError] = useState(null); // 오류 상태를 관리.

    useEffect(() => {
        const fetchChannelDetail = async () => {
            try {
                setLoading(true);
                // 채널 정보 가져오기
                const channelResponse = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings,contentDetails&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const channelData = await channelResponse.json();
                const channel = channelData.items[0];
                
                // 채널의 업로드 재생 목록 ID를 가져옵니다.
                const uploadPlaylistId = channel.contentDetails.relatedPlaylists.uploads;

                // 업로드 재생 목록의 동영상 가져오기
                const playlistResponse = await fetch(
                    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=${uploadPlaylistId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
                );
                const playlistData = await playlistResponse.json();

                setChannelDetail(channel);
                setVideos(playlistData.items);
                setError(null);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
                setError('데이터를 가져오는 중 오류가 발생했습니다.');
            } finally {
                setLoading(false); // 로딩 상태 해제.
            }
        };

        fetchChannelDetail();
    }, [channelId]);

    return (
        <Main 
            title="유튜브 채널"
            description="유튜브 채널 페이지입니다.">
            
            {loading && <p></p>} {/* 로딩 상태일 때 표시 */}
            {error && <p className="error">{error}</p>} {/* 오류 발생 시 표시 */}

            {channelDetail && (
                <section id='channel'>
                    <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div>
                    <div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span><CiBadgeDollar /> {channelDetail.statistics.subscriberCount} 구독자</span>
                            <span><CiMedal /> {channelDetail.statistics.videoCount} 동영상</span>
                            <span><CiRead /> {channelDetail.statistics.viewCount} 조회수</span>
                        </div>
                    </div>
                    <div className='channel__videos'>
                        <div className='video__list'>
                            {videos.map((video) => (
                                <div key={video.id} className='video__item'>
                                    <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target='_blank' rel='noopener noreferrer'>
                                        <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                                        <p>{video.snippet.title}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </Main>
    );
};

export default Channel;


