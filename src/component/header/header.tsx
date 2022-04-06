import React from 'react';
import style from './header.module.scss';
import {IHeaderProps} from '../../types/types';

const Header: React.FC<IHeaderProps> = ({isAvailable,sortByAvailable}: IHeaderProps) => {
    return (
        <div className={style.container}>
            <h1 className={style.main_header}>Explore</h1>
            <p className={style.text}>Buy and sell digital fashion NFT art</p>
            <label>Sort by available
                <input type='checkbox' checked={isAvailable} onChange={(event: any) => sortByAvailable(event.target.checked)}/>
            </label>
        </div>
    );
}

export default Header;