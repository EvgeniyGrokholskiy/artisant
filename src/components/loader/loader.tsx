import React from 'react'

import Card from '../card/card'
import { IMockProductsArray } from '../../types/types'


const Loader: React.FC = () => {

        const mockProductsArray: IMockProductsArray = [{}, {}, {}, {}]

        return (
            <>
                {
                    mockProductsArray.map((item: {},index) => <Card key={index}/>)
                }
            </>
        )
    }


export default Loader