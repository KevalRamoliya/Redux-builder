import axios from "axios"
import { BASE_URL, GET_URL } from './../../Constant';

export const getProduct = () => {
    return axios.get(BASE_URL + GET_URL)
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