import axios from 'axios';

// 서버의 기본 URL 정의
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// API 요청 함수 정의 (proxy를 사용하지 않고 pure URL을 사용)
export const fetchFromAPI = async (endpoint) => {
    try {
        // 직접 요청할 URL 생성
        const url = `${BASE_URL}/${endpoint}`;

        // API 요청 보내기
        const response = await axios.get(url, {
            params: {
                maxResults: 48,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // 환경 변수에서 API 키를 가져옵니다.
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
            },
        });

        console.log('API Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('API call failed:', error.message);
        return null;
    }
};
