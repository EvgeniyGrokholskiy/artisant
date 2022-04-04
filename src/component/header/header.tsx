import React from 'react';
import style from './header.module.scss';

function Header() {
    return (
        <div className={style.container}>
            <h1 className={style.main_header}>Explore</h1>
            <p className={style.text}>Buy and sell digital fashion NFT art</p>
        </div>
    );
}

export default Header;