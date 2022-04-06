import {IApi} from "../types/types";
import axios, {AxiosResponse} from "axios";
import {setActivePageActionCreatorType, sortByAvailableActionCreatorType} from "../redux/appReducer";


export const api: IApi = {
    getProducts: async () => {
        return await axios.get("https://artisant.io/api/products").then((data: AxiosResponse<any>) => data.data.data.products)
    },
    setAppStateToLocalStorage: (activePage: number, isAvailable: boolean): Promise<string> => {
        return new Promise<string>(resolve => {
            const objToLocalStorage = {activePage, isAvailable}
            const stringToLocalStorage = JSON.stringify(objToLocalStorage)
            localStorage.setItem('appState', stringToLocalStorage)
            resolve('success')
        })
    },
    getAppStateFromLocalStorage: ((setActivePage: setActivePageActionCreatorType, sortByAvailable: sortByAvailableActionCreatorType) => {
        return new Promise((resolve => {
            const stateFromLocalStorage = localStorage.getItem('appState')
            const stateObj = stateFromLocalStorage && JSON.parse(stateFromLocalStorage)
            const activePagesString = stateObj.activePage
            const isAvailableString = stateObj.isAvailable
            const activePageNumber = activePagesString && parseFloat(activePagesString)
            const isAvailableBoolean = isAvailableString && isAvailableString === true
            activePageNumber && setActivePage(activePageNumber)
            sortByAvailable(isAvailableBoolean)
            resolve('success')
        }))
    })
}