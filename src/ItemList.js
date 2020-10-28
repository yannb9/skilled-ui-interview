import React  from 'react';
import { ReactComponent as Max270 } from './svg/nike_air_max_270.svg'
import { ReactComponent as Max90 } from './svg/nike_air_max_90.svg'
import { ReactComponent as MaxPlus } from './svg/nike_air_max_plus.svg'

export const ItemList = [
    {
        product_name: 'Nike Air Max 270',
        brand: 'Nike',
        price: 195.80,
        svg: <Max270 po="1"/>,
    },
    {
        product_name: 'Nike Air Max 90',
        brand: 'Nike',
        price: 195.80,
        svg: <Max90 po="2"/>,
    },
    {
        product_name: 'Nike Air Max Plus',
        brand: 'Nike',
        price: 195.80,
        svg: <MaxPlus po="3"/>,
    }
]
