import React, { useState } from 'react';

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header id='header' role='banner' className={isMenuActive ? 'active' : ''}>
            <Logo toggleMenu={toggleMenu} />
            <Menu />
            <Sns />
        </header>
    );
};

window.addEventListener('resize', () => {
    const logo = document.querySelector('.header__logo');
    if (window.innerHeight < 600) {
        // 브라우저가 주소창 때문에 축소된 경우
        logo.style.top = '20px'; // 원하는 값으로 조정
    } else {
        logo.style.top = '10px';
    }
});
window.addEventListener('scroll', () => {
    const logo = document.querySelector('.header__logo');
    logo.style.top = window.scrollY + 10 + 'px'; // 스크롤에 따른 위치 조정
});


export default Header;
