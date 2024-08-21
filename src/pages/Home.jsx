import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import {webdText} from '../data/webd'
import {websiteText} from '../data/website'
import {gsapText} from '../data/gsap'
import {portfolioText} from '../data/portfolio'
import {youtubeText} from '../data/youtube'
import {developerText} from '../data/developer'
import {developer2Text} from '../data/developer2'
import {todayText} from '../data/today'

const Home = () => {
  return (
    <Main
      title = "송채은 유튜브 🩶"
      description = "송채은 유튜브에 오신 것을 환영합니다.">
      
      <Today videos={todayText} id="today"/>
      <Developer videos={developer2Text} title="🧸 ちぇうんのおすすめ" id="developer2" />
      <VideoSlider videos={webdText} title="🐈 일본 노래 가사/발음/해석" id="webd" />
      <VideoSlider videos={websiteText} title="📚 애니메이션으로 일본어 공부하기" id="website" />
      <VideoSlider videos={gsapText} title="🌸 하루 10분 일본어" id="gsap" />
      <VideoSlider videos={portfolioText} title="🙉 일본어 듣기 연습" id="portfolio" />
      <VideoSlider videos={youtubeText} title="🤍 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭" id="youtube" />
      <Developer videos={developerText} title="🧑‍💻 추천 개발자 목록" id="developer" />
    </Main>
  )
}

export default Home
