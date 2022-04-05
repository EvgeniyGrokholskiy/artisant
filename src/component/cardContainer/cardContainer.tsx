import React from 'react';
import Card from '../card/card';
import style from './cardContainer.module.scss';
import Pagination from '@mui/material/Pagination';
import {pagedProductArray} from '../../helpers/helpers';
import {ICardContainerProps, IProduct} from '../../types/types';


const CardContainer: React.FC<ICardContainerProps> = ({
                                                          products,
                                                          cardOnPage,
                                                          activePage,
                                                          setActivePage
                                                      }: ICardContainerProps) => {


    const pageQuality = products && Math.ceil(products.length / cardOnPage)

    const pageToShow = pagedProductArray(products, pageQuality, activePage, cardOnPage)

    return (
        <div className={style.main_wrapper}>
            <div className={style.card_wrapper}>
                {
                    pageToShow && pageToShow.products.map((item: IProduct) => {
                        return <Card creatorName={item?.created_by.display_name}
                                     quality={item?.quantity_nfts_created}
                                     price={item?.initial_price}
                                     header1={item?.name}
                                     header2={item?.json_nft_data.attributes[0].value}
                                     key={item?.product_id}
                                     id={item?.product_id}
                        />
                    })
                }
            </div>
            <Pagination count={pageQuality} size="small" onClick={(event: React.ChangeEvent<any>) => {
                setActivePage(Number(event.target.innerText));
            }}/>
        </div>
    );
};

export default CardContainer;