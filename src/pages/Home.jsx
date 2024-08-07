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

//import Webd from '../components/contents/webd'
//import Website from '../components/contents/Website'
//import Gsap from '../components/contents/Gsap'
//import Portfolio from '../components/contents/Portfolio'
//import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main
      title = "송채은 유튜브🐰"
      description = "송채은 유튜브에 오신 것을 환영합니다.">
      
      <Today />
      <VideoSlider videos={webdText} title="🐈 일본 노래 가사/발음/해석" id="webd" />
      <VideoSlider videos={websiteText} title="📚 아따맘마로 일본어 공부하기" id="website" />
      <VideoSlider videos={gsapText} title="🌸 하루 10분 일본어" id="gsap" />
      <VideoSlider videos={portfolioText} title="🙉 일본어 듣기 연습" id="portfolio" />
      <Developer />
      <VideoSlider videos={youtubeText} title="🤍 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭" id="youtube" />
    </Main>
  )
}

export default Home
