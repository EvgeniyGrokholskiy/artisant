import {api} from "../api/api";
import {Dispatch} from "react";
import {AnyAction} from "redux";
import {IProduct} from "../types/types";

const SET_PRODUCTS = "SRC/REDUX/APP_REDUCER/SET_PRODUCTS"
const SET_ACTIVE_PAGE = "SRC/REDUX/APP_REDUCER/SET_ACTIVE_PAGE"
const SET_CARD_ON_PAGE = "SRC/REDUX/APP_REDUCER/SET_CARD_ON_PAGE"
const SORT_BY_AVAILABILITY = "SRC/REDUX/APP_REDUCER/SORT_BY_AVAILABILITY"

interface ISetProductAction {
    type: typeof SET_PRODUCTS
    products: IProduct[]
}

interface ISetActivePage {
    type: typeof SET_ACTIVE_PAGE
    pageNumber: number
}

interface ISetCardOnPage {
    type: typeof SET_CARD_ON_PAGE
    cardOnPage: number
}

interface ISortByAvailable {
    type: typeof SORT_BY_AVAILABILITY
    payload: boolean
}

type actionType = ISetProductAction | ISetActivePage | ISetCardOnPage | ISortByAvailable

export interface IInitialState {
    products: [] | IProduct[]
    activePage: number
    cardOnPage: number
    isAvailable: boolean
}

export const initialState: IInitialState = {
    products: [],
    activePage: 1,
    cardOnPage: 4,
    isAvailable: false
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
            const isString = isNaN(action.pageNumber)
            if (isString) {
                return state
            }
            return {
                ...state, activePage: action.pageNumber
            }
        }
        case SET_CARD_ON_PAGE: {
            return {
                ...state, cardOnPage: action.cardOnPage
            }
        }
        case SORT_BY_AVAILABILITY: {
            return {
                ...state, isAvailable: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export type setProductActionCreatorType = (products: IProduct[]) => ISetProductAction

export const setProducts: setProductActionCreatorType = products => ({
    type: SET_PRODUCTS,
    products
})

export type setActivePageActionCreatorType = (activePage: number) => ISetActivePage

export const setActivePage: setActivePageActionCreatorType = pageNumber => ({
    type: SET_ACTIVE_PAGE,
    pageNumber
})

export type setCardOnPageActionCreatorType = (cardOnPage: number) => ISetCardOnPage

export const setCardOnPage: setCardOnPageActionCreatorType = cardOnPage => ({
    type: SET_CARD_ON_PAGE,
    cardOnPage
})

export type sortByAvailableActionCreatorType = (payload: boolean) => ISortByAvailable

export const sortByAvailable: sortByAvailableActionCreatorType = payload => ({
    type: SORT_BY_AVAILABILITY,
    payload
})

export type getProductsType = (isAvailable: boolean) => (dispatch: Dispatch<AnyAction>) => any

export const getProducts:getProductsType = (isAvailable: boolean) => async (dispatch: Dispatch<AnyAction>) => {
    await api.getProducts().then((data: IProduct[]) => {
        if (isAvailable) {
            const newArray: IProduct[] = data.filter(item => item.quantity_available > 0)
            dispatch(setProducts(newArray))
        } else {
            dispatch(setProducts(data))
        }
    })
}