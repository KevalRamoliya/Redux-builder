import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PROGRESS, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PROGRESS, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PROGRESS, POST_PRODUCT_SUCCESS } from './../Action/Action';

const initialstate = {
    product: [],

    getproductProgress: false,
    getproductError: null,

    postproductProgress: false,
    postproductError: null,

    deleteproductProgress: false,
    deleteproductError: null,

    dataIsLoaded: false,
}

export const productReducer = (state = initialstate, action) => {
    switch (action.type) {

        //get product
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

        //Post Product
        case POST_PRODUCT_PROGRESS: {
            return {
                ...state,
                postproductProgress: true
            }
        }

        case POST_PRODUCT_ERROR: {
            return {
                ...state,
                postproductError: action.data
            }
        }

        case POST_PRODUCT_SUCCESS: {
            return {
                ...state,
                product: state.product.concat(action.data),
                dataIsLoaded: true
            }
        }

        //Delete product
        case DELETE_PRODUCT_PROGRESS: {
            return {
                ...state,
                deleteproductProgress: true
            }
        }
        case DELETE_PRODUCT_ERROR: {
            return {
                ...state,
                deleteproductError: action.data
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                product: state.product.filter((e) => e.id !== action.data),
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