import {getPageQualityType, IProduct, IProducts, pagedProductArrayType, setQuantityCardOnPageType} from '../types/types'


export const getPagedProductArray: pagedProductArrayType = (products: Array<IProduct> | undefined,
                                                            pageQuality: number,
                                                            activePage: number,
                                                            cardOnPage: number) => {
    if (products?.length) {
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

export const getQuantityCardOnPage: setQuantityCardOnPageType = () => {

    if (window.innerWidth >= 1300) {
        return 4
    }
    if (window.innerWidth < 1300 && window.innerWidth >= 978) {
        return 3
    }
    if (window.innerWidth < 978) {
        return 2
    }
    return 4
}

export const getPageQuality: getPageQualityType = (productsLength: number, cardOnPage: number) => {
    return Math.ceil(productsLength / cardOnPage)
}

export const refreshPage = () => {
    window.location.reload();
}
