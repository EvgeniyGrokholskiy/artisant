import React from 'react'
import style from './lostConnection.module.scss'
import {refreshPage} from '../../helpers/helpers'
import {ILostConnectionProps} from '../../types/types'
import lostConnectionImg from './../../assets/img/oops.webp'


const LostConnection: React.FC<ILostConnectionProps> = ({error}: ILostConnectionProps) => {

    return (
        <>
            {
                error && <div className={style.wrapper}>
                    <img src={lostConnectionImg} alt='no internet((('/>
                    <button className={style.button} onClick={refreshPage}>Try again</button>
                </div>
            }
        </>

    );
};

export default LostConnection;