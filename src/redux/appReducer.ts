import {IProducts} from "../types/types";

const SET_PRODUCTS = "SRC/REDUX/APP_REDUCER/SET_PRODUCTS"
const SET_ACTIVE_PAGE = "SRC/REDUX/APP_REDUCER/SET_ACTIVE_PAGE"
const SET_CARD_ON_PAGE = "SRC/REDUX/APP_REDUCER/SET_CARD_ON_PAGE"

interface setProductAction {
    type: typeof SET_PRODUCTS
    products: IProducts
}

interface setActivePage {
    type: typeof SET_ACTIVE_PAGE
    pageNumber: number
}

interface setCardOnPage {
    type: typeof SET_CARD_ON_PAGE
    cardOnPage: number
}

type actionType = setProductAction | setActivePage | setCardOnPage

interface IInitialState {
    products: [] | IProducts
    activePage: number
    cardOnPage: number
}

export const initialState: IInitialState = {
    products: [],
    activePage: 1,
    cardOnPage: 2
}

type appReducerType = (state: IInitialState, action: actionType) => IInitialState

export const appReducer: appReducerType = (state: IInitialState = initialState, action: actionType) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state, products: action.products
            }
        }
        case SET_ACTIVE_PAGE: {
            return {
                ...state, activePage: action.pageNumber
            }
        }
        case SET_CARD_ON_PAGE: {
            return {
                ...state, cardOnPage: action.cardOnPage
            }
        }
        default: {
            return state
        }
    }
}