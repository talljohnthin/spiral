import { 
    GET_ALL_SEGMENT
} from './../actions/segment/segmentTypes'

const initialState = {
    segments:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SEGMENT :
            return {
                ...state,
                segments: action.payload
            }
        default : return state
    }
}

export default reducer
