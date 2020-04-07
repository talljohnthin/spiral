import axios from 'axios'
import { domain } from '../../../helpers/backend.js'

import { 
    GET_ALL_PRODUCTS,
} from './productTypes'

export const getProducts = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${domain}/products`)
            dispatch({
                type: GET_ALL_PRODUCTS, 
                payload: response.data
            })
        } catch (error) {
            console.log('get all products error:', error.message)
        }
    }
}