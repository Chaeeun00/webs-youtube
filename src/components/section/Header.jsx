import React from 'react'

import { CiHeart } from "react-icons/ci";
import { CiApple } from "react-icons/ci";
import { CiDesktopMouse1 } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { CiLemon } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>webs<br />youtube</span>
        </a>
      </h1>

      <nav className='header__menu'>
        <ul className='menu'>
        <li className='active'>
            <a href='/'>
                <CiHeart /> 송채은
            </a>
        </li>
        <li>
            <a href='/today'>
                <CiBookmark /> 추천 영상
            </a>
        </li>
        <li>
            <a href='/developer'>
                <CiApple /> 추천 개발자
            </a>
        </li>
        <li>
            <a href='/webd'>
                <CiDesktopMouse1 /> 웹 디자인 기능사
            </a>
        </li>
        <li>
            <a href='/website'>
                <CiDesktop /> 웹 표준 사이트
            </a>
        </li>
        <li>
            <a href='/gsap'>
                <CiLemon /> GSAP Parallax
            </a>
        </li>
        <li>
            <a href='/port'>
                <CiFaceSmile /> 포트폴리오 사이트
            </a>
        </li>
        <li>
            <a href='/youtube'>
                <CiYoutube /> 유튜브 클론 사이트
            </a>
        </li>
        </ul>
        <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
        </ul>
      </nav>

      <div className='header__sns'>
      <ul>
          <li>
              <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                  <AiFillGithub />
              </a>
          </li>
          <li>
              <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                  <AiFillYoutube />
              </a>
          </li>
          <li>
              <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                  <AiOutlineCodepen />
              </a>
          </li>
          <li>
              <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                  <AiOutlineInstagram />
              </a>
          </li>
      </ul>
      </div>
    </header>
  )
}

export default Header
