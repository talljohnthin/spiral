import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import segmentReducer from './segmentReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    category: categoryReducer,
    segment: segmentReducer,
    product: productReducer
})
export default rootReducer