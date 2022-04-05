import {create} from "domain";

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

export interface IProducts {
    products: Array<IProduct>
}