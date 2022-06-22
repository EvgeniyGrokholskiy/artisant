import {IRootState} from './store'

export const getError = (state: IRootState) => state.app.error
export const getCardOnPage = (state: IRootState) => state.app.cardOnPage
export const getActivePage = (state: IRootState) => state.app.activePage
export const getProductsState = (state: IRootState) => state.app.products
export const getIsAvailable = (state: IRootState) => state.app.isAvailable
