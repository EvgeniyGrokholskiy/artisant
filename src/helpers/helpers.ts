import {IProduct, IProducts, pagedProductArrayType, setQuantityCardOnPageType} from "../types/types";


export const pagedProductArray: pagedProductArrayType = (products: Array<IProduct> | undefined, pageQuality: number, activePage: number, cardOnPage: number) => {
    if (products) {
        let activePageState: IProducts = {
            products: []
        }
        const starIndexOfArray = (activePage * cardOnPage) - cardOnPage
        const stopIndexOfArray = (activePage * cardOnPage) - 1

        for (let i = starIndexOfArray; i <= stopIndexOfArray; i++) {
            activePageState.products.push(products[i])
        }
        return activePageState
    }
}

export const setQuantityCardOnPage: setQuantityCardOnPageType = () => {
    if (window.innerWidth < 1299 && window.innerWidth > 978) {
        return 3
    } else if (window.innerWidth < 987) {
        return 2
    } else {
        return 4
    }
}
