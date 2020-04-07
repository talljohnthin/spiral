import axios from 'axios'
import { domain } from '../../../helpers/backend.js'

import { 
    GET_ALL_CATEGORY,
} from './categoryTypes'

export const getCategories = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${domain}/categories`)
            dispatch({
                type: GET_ALL_CATEGORY, 
                payload: response.data
            })
        } catch (error) {
            console.log('get all categories error:', error.message)
        }
    }
}