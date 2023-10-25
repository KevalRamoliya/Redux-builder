import { call, put, takeEvery } from "redux-saga/effects";
import { getProduct } from './../../Product/Api/Api';
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS } from "../../Product/Action/Action";
import { DELETE_URL } from "../../Constant";


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

export function* deleteitem() {
    yield takeEvery(DELETE_URL)
}