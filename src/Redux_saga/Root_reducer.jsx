import { combineReducers } from "redux";
import productReducer from './Product/Reducer/Reducer';

const rootReducer = combineReducers({
    productReducer,
})

export default rootReducer;