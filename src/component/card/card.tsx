import React from 'react';
import style from './card.module.scss';
import productImage from '../../assets/img/product_img.png'

interface ICardProps {
    creatorName?: string
    header1?: string
    header2?: string
    quality?: number
    price?: number
}

const Card: React.FC<ICardProps> = ({
                                        creatorName = 'Alexander Kurmanin',
                                        header1 = 'Digital Addiction',
                                        header2 = 'Number Seven',
                                        quality = 50,
                                        price = 0.07
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