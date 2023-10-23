import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../Redux_saga/Product/Action/Action';


const Data = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])
    return (
        <div>
            {
                data.product.map((e, index) => {
                    return (
                        <h1>{e.title}</h1>
                    )
                })
            }
        </div>
    )
}

export default Data
