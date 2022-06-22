import {IInitialState} from '../redux/appReducer'

/************App Reducer State*************************/

export interface IPhotoNames {
    original: string
    compressed: string
}

export interface IJsonNftData {
    name: string
    image: string
    attributes: Array<IAttributes>
    description: string
    external_url: string
}

export interface IAttributes {
    value: string
    traitType: string
}

export interface ICreatedBy {
    user_id: number
    display_name: string
    public_address: string
    custom_url: string
    image: IPhotoNames
}

export interface IProduct {
    product_id: number
    name: string
    description: string
    quantity: number
    initial_price: number
    type: string
    avatar: IPhotoNames
    other_file: {
        original: string
    }
    additional_photos: Array<IPhotoNames>
    created_by: ICreatedBy
    json_nft_data: IJsonNftData
    json_nft_link: string
    tx_status: string
    created_at: string
    updated_at: string
    quantity_nfts_created: number
    on_main_page: boolean
    is_wearable: boolean
    latest_price: string
    quantity_available: number
}

export interface IStore {
    app: IInitialState,
}

export interface IProducts {
    products: Array<IProduct>
}

export type IMockProductsArray = Array<{}>

/**************Component Props Interface**********************/

export interface ICardContainerProps {
    products: Array<IProduct>
    cardOnPage: number
    activePage: number
}

export interface ICardProps {
    creatorName?: string
    header1?: string
    header2?: string
    quality?: number
    price?: number
    id?: number
}


export interface ILocalStorageAppState {
    activePage: number
    isAvailable: boolean
}

/********Function Types & Object Interface**********/

export type pagedProductArrayType = (products: Array<IProduct> | undefined, pageQuality: number, activePage: number, cardOnPage: number) => IProducts | undefined

export type setQuantityCardOnPageType = () => number

export interface IApi {
    getProducts: () => Promise<Array<IProduct>>
    setAppStateToLocalStorage: (activePage: number, isAvailable: boolean) => Promise<string>
    getAppStateFromLocalStorage: () => Promise<ILocalStorageAppState>
}

export type getPageQualityType = (productsLength: number, cardOnPage: number) => number