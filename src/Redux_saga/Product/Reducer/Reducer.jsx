import { DELETE_PRODUCT_DELETE, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS } from './../Action/Action';

const initialstate = {
    product: [],

    getproductProgress: false,
    getproductError: null,
    dataIsLoaded: false,
}

export const productReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_PRODUCT_PROGRESS: {
            return {
                ...state,
                getproductProgress: true
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

        case DELETE_PRODUCT_DELETE: {
            return state;
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default productReducer;