import {
    IProduct,
    IProducts,
    getPageQualityType,
    pagedProductArrayType,
    setQuantityCardOnPageType
} from "../types/types";


export const getPagedProductArray: pagedProductArrayType = (products: Array<IProduct> | undefined,
                                                            pageQuality: number,
                                                            activePage: number,
                                                            cardOnPage: number) => {
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
    if (window.innerWidth < 1300 && window.innerWidth > 978) {
        return 3
    } else if (window.innerWidth < 987) {
        return 2
    } else {
        return 4
    }
}

export const getPageQuality: getPageQualityType = (productsLength: number, cardOnPage: number) => {
    return Math.ceil(productsLength / cardOnPage)
}
