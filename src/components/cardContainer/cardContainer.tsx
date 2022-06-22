import React from 'react'
import Pagination from '@mui/material/Pagination'
import {useDispatch, useSelector} from 'react-redux'

import Card from '../card/card'
import Loader from '../loader/loader'
import {IProduct} from '../../types/types'
import style from './cardContainer.module.scss'
import {setActivePage} from '../../redux/appReducer'
import {getPagedProductArray, getPageQuality} from '../../helpers/helpers'
import {getActivePage, getCardOnPage, getProductsState} from "../../redux/selectors"


const CardContainer: React.FC = () => {

    const dispatch = useDispatch()
    const cardOnPage = useSelector(getCardOnPage)
    const activePage = useSelector(getActivePage)
    const products = useSelector(getProductsState)
    const pageQuality = getPageQuality(products.length, cardOnPage)
    const pageToShow = getPagedProductArray(products, pageQuality, activePage, cardOnPage)

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        dispatch(setActivePage(page))
    }

    return (
        <div className={style.main_wrapper}>
            <div className={style.card_wrapper}>

                {
                    pageToShow ?
                        pageToShow.products.map((item: IProduct) => {
                            return <Card creatorName={item.created_by.display_name}
                                         quality={item.quantity_available}
                                         price={item.initial_price}
                                         header1={item.name}
                                         header2={item.json_nft_data.attributes[0].value}
                                         key={item.product_id}
                                         id={item.product_id}
                            />
                        })
                        : <Loader/>
                }
            </div>
            <Pagination count={pageQuality} size='small' page={activePage} onChange={handlePageChange}/>
        </div>
    )
}

export default CardContainer