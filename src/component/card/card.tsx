import React from 'react';
import style from './card.module.scss';
import {ICardProps} from "../../types/types";
import productImage from '../../assets/img/product_img.png'


const Card: React.FC<ICardProps> = ({
                                        creatorName = 'Data is loading',
                                        header1 = 'Data is loading',
                                        header2 = 'Data is loading',
                                        quality = 1,
                                        price = 0.00
                                    }: ICardProps) => {
    return (
        <div className={style.wrapper}>
            <img className={style.product_image} src={productImage} alt='nice dress'/>
            <div className={style.upper_text_section}>
                <p className={style.upper_text_section__text}>created by</p>
                <p className={style.upper_text_section__creator_name}>{creatorName}</p>
            </div>
            <div className={style.low_text_section}>
                <h2 className={style.low_text_section__header}>{header1}</h2>
                <h3 className={style.low_text_section__header}>{header2}</h3>
            </div>
            <div className={style.info_tag__available_info}>
                <p className={style.info_tag__text}>available</p>
                <p className={style.info_tag__quality}>{`${'1'} of ${quality}`}</p>
            </div>
            <div className={style.info_tag__price_info}>
                <p className={style.info_tag__text_price}>price</p>
                <p className={style.info_tag__price}>{`${price} ETH`}</p>
            </div>
        </div>
    );
}

export default Card;