import { all } from "@redux-saga/core/effects";
import { deleteProductSaga, getProductSaga, postProductSaga } from "./Root_saga/Rootsaga";


export function* rootSaga() {
    yield all([getProductSaga(), postProductSaga(), deleteProductSaga()])
}