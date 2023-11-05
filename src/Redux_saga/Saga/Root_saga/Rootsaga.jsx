import { takeLatest } from "redux-saga/effects";
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from "../../Product/Action/Action";
import { handleGetProduct, handlePostProduct, handledeleteproduct, handleupdateproduct } from "../Manage_product/Mprodcut";

//getsaga
export function* getProductSaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS, handleGetProduct);
}

//postsaga
export function* postProductSaga() {
    yield takeLatest(POST_PRODUCT_PROGRESS, handlePostProduct)
}

//deletesaga
export function* deleteProductSaga() {
    yield takeLatest(DELETE_PRODUCT_PROGRESS, handledeleteproduct)
}


//updatesaga
export function* updateProductSaga() {
    yield takeLatest(UPDATE_PRODUCT_PROGRESS, handleupdateproduct)
}