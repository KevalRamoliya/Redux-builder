
import { GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from './../Action/Action';

const initialstate = {
    product: [],
    getProductProgress: false,
    getproductError: null,
    dataIsLoaded: false,
}

const productReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return {
                ...state,
                getProductProgress: true
            }
        }
        case GET_PRODUCT_ERROR: {
            return {
                ...state,
                getproductError: action.data
            }
        }

        case GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                product: action.data,
                dataIsLoaded: true
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default productReducer;