import {
    IInitialState,
    setActivePageActionCreatorType,
    setCardOnPageActionCreatorType,
    setProductActionCreatorType,
    sortByAvailableActionCreatorType
} from '../redux/appReducer';

/************App Reducer State*************************/

export interface IPhotoNames {
    "original": string
    "compressed": string
}

export interface IJson_nft_data {
    "name": string
    "image": string
    "attributes": Array<IAttributes>
    "description": string
    "external_url": string
}

export interface IAttributes {
    "value": string
    "trait_type": string
}

export interface ICreated_by {
    "user_id": number
    "display_name": string
    "public_address": string
    "custom_url": string
    "image": IPhotoNames
}

export interface IProduct {
    "product_id": number
    "name": string
    "description": string
    "quantity": number
    "initial_price": number
    "type": string
    "avatar": IPhotoNames
    "other_file": {
        "original": string
    }
    "additional_photos": Array<IPhotoNames>
    "created_by": ICreated_by
    "json_nft_data": IJson_nft_data
    "json_nft_link": string
    "tx_status": string
    "created_at": string
    "updated_at": string
    "quantity_nfts_created": number
    "on_main_page": boolean
    "is_wearable": boolean
    "latest_price": string
    "quantity_available": number
}

export interface IStore {
    app: IInitialState,
}

export interface IProducts {
    products: Array<IProduct>
}

export interface IResolveData {
    activePageNumber: number
    isAvailableBoolean: boolean
}

/**************Component Props Interface**********************/

export interface ICardContainerProps {
    products: Array<IProduct>
    cardOnPage: number
    activePage: number
    setActivePage: setActivePageActionCreatorType
}

export interface ICardProps {
    creatorName?: string
    header1?: string
    header2?: string
    quality?: number
    price?: number
    id?: number
}

export interface IAppProps {
    products: Array<IProduct>
    cardOnPage: number
    activePage: number
    isAvailable: boolean
    setProducts: setProductActionCreatorType
    setActivePage: setActivePageActionCreatorType
    setCardOnPage: setCardOnPageActionCreatorType
    sortByAvailable: sortByAvailableActionCreatorType
}

export interface IHeaderProps {
    isAvailable: boolean
    sortByAvailable: sortByAvailableActionCreatorType
}

/********Function Types & Object Interface**********/

export type pagedProductArrayType = (products: Array<IProduct> | undefined, pageQuality: number, activePage: number, cardOnPage: number) => IProducts | undefined

export type setQuantityCardOnPageType = () => number

export interface IApi {
    getProducts: () => Promise<Array<IProduct>>
    setAppStateToLocalStorage: (activePage: number, isAvailable: boolean) => Promise<string>
    getAppStateFromLocalStorage: () => Promise<IResolveData>
}

export type getPageQualityType = (productsLength: number, cardOnPage: number) => number