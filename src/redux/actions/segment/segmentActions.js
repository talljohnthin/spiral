import axios from 'axios'
import { domain } from '../../../helpers/backend.js'

import { 
    GET_ALL_SEGMENT
} from './segmentTypes'

export const getSegments = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${domain}/segments`)
            dispatch({
                type: GET_ALL_SEGMENT, 
                payload: response.data
            })
        } catch (error) {
            console.log('get all segments error:', error.message)
        }
    }
}