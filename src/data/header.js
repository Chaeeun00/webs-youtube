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

export const headerMenus = [
    {
        title: "송채은",
        icon: <CiHeart />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiBookmark />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiApple />,
        src: "/developer"
    },
    {
        title: "웹 디자인 기능사",
        icon: <CiDesktopMouse1 />,
        src: "/webd"
    },
    {
        title: "웹 표준 사이트",
        icon: <CiDesktop />,
        src: "/website"
    },
    {
        title: "GSAP Parallax",
        icon: <CiLemon />,
        src: "/gsap"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiFaceSmile />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiYoutube />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "webstoryboy",
        src: "/search/webstoryboy"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/webstoryboy",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]