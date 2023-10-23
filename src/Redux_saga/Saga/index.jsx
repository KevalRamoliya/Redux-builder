import { all } from "@redux-saga/core/effects";
import { getProductSaga } from "./Root_saga/Rootsaga";


export function* rootSaga() {
    yield all([getProductSaga()])
}