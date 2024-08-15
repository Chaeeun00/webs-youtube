import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 검색어가 변경될 때 기존 데이터 초기화
        setVideos([]);
        setNextPageToken(null);
        fetchVideos(searchId);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        setLoading(true);
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${query}&type=video&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        )
        .then(response => response.json())
        .then(result => {
            setVideos(prevVideos => [...prevVideos, ...result.items]);
            setNextPageToken(result.nextPageToken || null);
            setError(null);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError('ERROR');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    return (
        <Main 
            title="유튜브 검색"
            description="유튜브 검색 결과 페이지입니다."
        >
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                {loading && <p>로딩 중...</p>}
                {error && <p className="error">{error}</p>}
                <div className="video__more">
                    {nextPageToken && !loading && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    );
};

export default Search;
