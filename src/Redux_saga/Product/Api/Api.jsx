import axios from "axios"
import { BASE_URL, DELETE_URL, GET_URL, POST_URL } from './../../Constant';

//get product
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

//post product
export const postProduct = (action) => {
    return axios.post(BASE_URL + POST_URL, action.payload)
        .then((res) => {
            const data = res.data;
            const status = res.status
            return {
                data,
                status
            }
        })
        .catch((e) => console.log(e));
}

//delete product
export const removeProduct = (action) => {
    return axios.delete(BASE_URL + DELETE_URL + action.payload)
        .then((res) => {
            const data = action.payload;
            const status = res.status;
            return {
                data,
                status
            }
        })
        .catch((e) => console.log(e));
}