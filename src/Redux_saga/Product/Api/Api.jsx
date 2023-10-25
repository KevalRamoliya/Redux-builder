import axios from "axios"
import { BASE_URL, DELETE_URL, GET_URL } from './../../Constant';

export const getProduct = () => {
    return axios.get(BASE_URL + GET_URL)
        .then((res) => {
            const data = res.data;
            const status = res.status;

            return {
                data,
                status
            }
        })
        .catch((e) => console.log(e));
}

export const removeProduct = () => {
    return axios.delete(BASE_URL + DELETE_URL)
        .then((res) => {
            const data = res.data;
        })
        .catch((e) => console.log(e));
}