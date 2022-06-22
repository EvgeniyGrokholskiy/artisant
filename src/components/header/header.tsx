import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import style from './header.module.scss'
import {getIsAvailable} from '../../redux/selectors'
import {sortByAvailable} from '../../redux/appReducer'


const Header: React.FC = () => {

    const dispatch = useDispatch()
    const isAvailable = useSelector(getIsAvailable)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => dispatch(sortByAvailable(event.target.checked))

    return (
        <div className={style.container}>
            <h1 className={style.main_header}>Explore</h1>
            <p className={style.text}>Buy and sell digital fashion NFT art</p>
            <label>Sort by available
                <input type='checkbox' checked={isAvailable} onChange={handleChange}/>
            </label>
        </div>
    )
}

export default React.memo(Header)