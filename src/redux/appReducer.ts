import {IProducts} from "../types/types";

const SET_PRODUCTS = "SRC/REDUX/APP_REDUCER/SET_PRODUCTS"
const SET_ACTIVE_PAGE = "SRC/REDUX/APP_REDUCER/SET_ACTIVE_PAGE"
const SET_CARD_ON_PAGE = "SRC/REDUX/APP_REDUCER/SET_CARD_ON_PAGE"

interface ISetProductAction {
    type: typeof SET_PRODUCTS
    products: IProducts
}

interface ISetActivePage {
    type: typeof SET_ACTIVE_PAGE
    pageNumber: number
}

interface ISetCardOnPage {
    type: typeof SET_CARD_ON_PAGE
    cardOnPage: number
}

type actionType = ISetProductAction | ISetActivePage | ISetCardOnPage

export interface IInitialState {
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
export type setProductActionCreator = (products: IProducts) => ISetProductAction

export const setProducts: setProductActionCreator = products => ({
    type: SET_PRODUCTS,
    products
})

export type setActivePageActionCreator = (activePage: number) => ISetActivePage

export const setActivePage: setActivePageActionCreator = pageNumber => ({
    type: SET_ACTIVE_PAGE,
    pageNumber
})

export type setCardOnPageActionCreator = (cardOnPage: number) => ISetCardOnPage

export const setCardOnPage: setCardOnPageActionCreator = cardOnPage => ({
    type: SET_CARD_ON_PAGE,
    cardOnPage
})