import axios, {AxiosResponse} from 'axios'

import {IApi, ILocalStorageAppState, IProduct} from '../types/types'


export const api: IApi = {
    getProducts: async () => {
        return await axios.get<AxiosResponse<{ creators: any, products: IProduct[] }>>('https://artisant.io/api/products').then((response) => response.data.data.products)
    },
    setAppStateToLocalStorage: (activePage: number, isAvailable: boolean): Promise<string> => {
        return new Promise<string>(resolve => {
            const objToLocalStorage = {activePage, isAvailable}
            const stringToLocalStorage = JSON.stringify(objToLocalStorage)
            localStorage.setItem('appState', stringToLocalStorage)
            resolve('success')
        })
    },
    getAppStateFromLocalStorage: (): Promise<ILocalStorageAppState> => {
        return new Promise((resolve => {
            const stateFromLocalStorage = localStorage.getItem('appState')
            const stateObj = stateFromLocalStorage && JSON.parse(stateFromLocalStorage)
            resolve(stateObj)
        }))
    }
}