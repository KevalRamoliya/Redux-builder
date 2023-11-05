import { all } from "@redux-saga/core/effects";
import { deleteProductSaga, getProductSaga, postProductSaga, updateProductSaga } from "./Root_saga/Rootsaga";


export function* rootSaga() {
    yield all([getProductSaga(), postProductSaga(), deleteProductSaga(), updateProductSaga()])
}