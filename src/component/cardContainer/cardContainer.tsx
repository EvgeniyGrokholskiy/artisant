import React from 'react'
import Card from '../card/card'
import Loader from '../loader/loader'
import style from './cardContainer.module.scss'
import Pagination from '@mui/material/Pagination'
import {ICardContainerProps, IProduct} from '../../types/types'
import {getPagedProductArray, getPageQuality} from '../../helpers/helpers'


const CardContainer: React.FC<ICardContainerProps> = ({
                                                          products,
                                                          cardOnPage,
                                                          activePage,
                                                          setActivePage
                                                      }: ICardContainerProps) => {


    const pageQuality = getPageQuality(products?.length, cardOnPage)

    const pageToShow = getPagedProductArray(products, pageQuality, activePage, cardOnPage)

    return (
        <div className={style.main_wrapper}>
            <div className={style.card_wrapper}>

                {
                    pageToShow ?
                        pageToShow.products.map((item: IProduct) => {
                            return <Card creatorName={item?.created_by.display_name}
                                         quality={item?.quantity_available}
                                         price={item?.initial_price}
                                         header1={item?.name}
                                         header2={item?.json_nft_data.attributes[0].value}
                                         key={item?.product_id}
                                         id={item?.product_id}
                            />
                        })
                        : <Loader/>
                }
            </div>
            <Pagination count={pageQuality} size='small' page={activePage} onClick={(event: React.ChangeEvent<any>) => {
                setActivePage(Number(event.target.innerText));
            }}/>
        </div>
    );
};

export default CardContainer