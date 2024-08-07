import { BiHeart } from "react-icons/bi";
import { DiApple } from "react-icons/di";
import { IoMdMusicalNotes } from "react-icons/io";
import { BiBadge } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { FcMusic } from "react-icons/fc";
import { PiCatDuotone } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "송채은",
        icon: <PiCatDuotone />,
        src: "/"
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
        title: "아따맘마(あたしンち)",
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
        title: "추천 개발자",
        icon: <DiApple />,
        src: "/developer"
    },
    {
        title: "𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭",
        icon: <FcMusic />,
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