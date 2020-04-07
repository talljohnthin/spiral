import { 
    GET_ALL_CATEGORY,
} from './../actions/category/categoryTypes'

const initialState = {
    categories:[]
}

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CATEGORY :
            return {
                ...state,
                categories: action.payload,
            }
        default : return state
    }
}

export default reducer
