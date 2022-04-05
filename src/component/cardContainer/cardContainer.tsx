import React from 'react';
import {IProducts} from "../../types/types";
import Card from "../card/card";
import Pagination from '@mui/material/Pagination';

interface ICardContainerProps {
    products: IProducts | undefined
    cardOnPage?: number
}

type pagedProductArrayType = (products: IProducts | undefined, pageQuality: undefined | number, activePage: number, cardOnPage: number) => IProducts | undefined

const CardContainer: React.FC<ICardContainerProps> = ({products, cardOnPage = 2}) => {

    const pageQuality = products && Math.ceil(products.products.length / cardOnPage)

    const pagedProductArray: pagedProductArrayType = (products: IProducts | undefined, pageQuality = 1, activePage: number, cardOnPage: number) => {
        if (products) {
            let activePageState: IProducts = {
                products: []
            }
            const starIndexOfArray = (activePage * cardOnPage) - cardOnPage
            const stopIndexOfArray = (activePage * cardOnPage) - 1

            for (let i = starIndexOfArray; i <= stopIndexOfArray; i++) {
                activePageState.products.push(products.products[i])
            }
            return activePageState
        }
    }
    const pageToShow = pagedProductArray(products, pageQuality, 1, cardOnPage)

    return (
        <div>
            {
                pageToShow && pageToShow.products.map((item) => {
                    return <Card creatorName={item.created_by.display_name}
                                 quality={item.quantity_nfts_created}
                                 price={item.initial_price}
                                 header1={item.name}
                                 header2={item.json_nft_data.attributes[0].value}
                                 key={item.product_id}/>
                })
            }
            <Pagination count={pageQuality} size="small" onClick={(event: React.ChangeEvent<any>)=>{
                console.log(event.target.innerText);}} />
        </div>
    );
};

export default CardContainer;