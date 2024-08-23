import axios from 'axios';

// 서버의 기본 URL 정의
export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 48,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,  // 환경 변수에서 API 키를 가져옵니다.
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

// API 요청 함수 정의
export const fetchFromAPI = async (url) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch (error) {
        console.error('API call failed:', error.message);
        return null;
    }
};
