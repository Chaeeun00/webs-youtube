import { BiHeart } from "react-icons/bi";
import { DiApple } from "react-icons/di";
import { IoMdMusicalNotes } from "react-icons/io";
import { BiBadge } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { GiHeartKey } from "react-icons/gi";
import { PiCatDuotone } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { LiaDoveSolid } from "react-icons/lia";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiCatFill } from "react-icons/pi";

export const headerMenus = [
    {
        title: "송채은",
        icon: <PiCatFill />,
        src: "/"
    },
    {
        title: "ちぇうんのおすすめ",
        icon: <PiCatDuotone />,
        src: "/developer2"
    },
    {
        title: "추천 영상",
        icon: <BiHeart />,
        src: "/today"
    },
    {
        title: "日本の歌",
        icon: <IoMdMusicalNotes />,
        src: "/webd"
    },
    {
        title: "아따맘마(あたしんち)",
        icon: <BiBadge />,
        src: "/website"
    },
    {
        title: "一日10分日本語",
        icon: <GoPencil />,
        src: "/gsap"
    },
    {
        title: "日本語リスニング",
        icon: <TiStarFullOutline />,
        src: "/port"
    },
    {
        title: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭",
        icon: <GiHeartKey />,
        src: "/youtube"
    },
    {
        title: "추천 개발자",
        icon: <DiApple />,
        src: "/developer"
    },
];

export const searchKeyword = [
    {
        title: "日本語",
        src: "/search/일본어"
    },
    {
        title: "アニメ",
        src: "/search/애니메이션"
    },
    {
        title: "映画",
        src: "/search/영화"
    },
    {
        title: "Java",
        src: "/search/자바"
    },
    {
        title: "JavaSpringBoot",
        src: "/search/자바스프링부트"
    },
    {
        title: "Javascript",
        src: "/search/자바스크립트"
    },
    {
        title: "React.js",
        src: "/search/리액트"
    },
    {
        title: "スタジオジブリ",
        src: "/search/지브리"
    },
    {
        title: "ちいかわ",
        src: "/search/치이카와"
    },
    {
        title: "PlayList",
        src: "/search/playlist"
    },
    {
        title: "Piano",
        src: "/search/피아노"
    },
    {
        title: "K-POP",
        src: "/search/K-POP"
    },
    {
        title: "J-POP",
        src: "/search/J-POP"
    },
    {
        title: "News",
        src: "/search/뉴스"
    }
];

export const snsLink = [
    {
        title: "programmers",
        url: "https://school.programmers.co.kr/learn/challenges?order=recent",
        icon: <LiaDoveSolid />
    },
    {
        title: "github",
        url: "https://github.com/Chaeeun00",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/@user-vk4jc4ez5g",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/s_songg/",
        icon: <AiOutlineInstagram />
    },
]