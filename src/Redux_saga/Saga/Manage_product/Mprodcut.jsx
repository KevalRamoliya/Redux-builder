import { call, put } from "redux-saga/effects";
import { getProduct, postProduct, removeProduct } from './../../Product/Api/Api';
import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS } from "../../Product/Action/Action";

//handlegetproduct
export function* handleGetProduct(action) {
    try {
        const res = yield call(getProduct, action);
        const data = res.data;
        const status = res.status;

        if (status === 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: GET_PRODUCT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: GET_PRODUCT_ERROR, e });
    }
}


//handlepost product
export function* handlePostProduct(action) {
    try {
        const res = yield call(postProduct, action)
        const data = res.data;
        const status = res.status
        if (status === 201) {
            yield put({ type: POST_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: POST_PRODUCT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: POST_PRODUCT_ERROR, e })
    }
}

//handledeleteproduct
export function* handledeleteproduct(action) {
    try {
        const res = yield call(removeProduct,action);
        const data = res.data;
        const status = res.status;
        console.log(data);

        if (status === 200) {
            yield put({ type: DELETE_PRODUCT_SUCCESS, data })
        } else {
            yield put({ type: DELETE_PRODUCT_ERROR, data })
        }
    } catch (e) {
        yield put({ type: DELETE_PRODUCT_ERROR, e });
    }
}