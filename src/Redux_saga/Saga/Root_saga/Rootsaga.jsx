import { takeLatest } from "redux-saga/effects";
import { GET_PRODUCT_PROGRESS } from "../../Product/Action/Action";
import { handleGetProduct } from "../Manage_product/Mprodcut";

export function* getProductSaga() {
    yield takeLatest(GET_PRODUCT_PROGRESS,handleGetProduct);
}