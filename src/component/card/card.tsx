import React from 'react';
import style from './card.module.scss';
import productImage from '../../assets/img/product_img.png'


function Card() {
    return (
        <div className={style.wrapper}>
            <div className={style.product_image_block}>
                <img className={style.product_image} src={productImage} alt='nice dress'/>
                <div className={style.upper_text_section}>
                    <p className={style.upper_text_section__text}>created by</p>
                    <p className={style.upper_text_section__creator_name}>{'Alexander Kurmanin'}</p>
                </div>
                <div className={style.low_text_section}>
                    <h2 className={style.low_text_section__header}>{'Digital Addiction'}</h2>
                    <h3 className={style.low_text_section__header}>{'Number Seven'}</h3>
                </div>
            </div>
            <div className={style.info_tag}>
                <div className={style.info_tag__available_info}>
                    <p className={style.info_tag__text}>available</p>
                    <p className={style.info_tag__quality}>{`${'1'} of ${'50'}`}</p>
                </div>
                <div className={style.info_tag__price_info}>
                    <p className={style.info_tag__text_price}>price</p>
                    <p className={style.info_tag__price}>0.07 ETH</p>
                </div>
            </div>
        </div>
    );
}

export default Card;