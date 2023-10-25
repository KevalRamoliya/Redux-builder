import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_DELETE, GET_PRODUCT_PROGRESS } from '../Redux_saga/Product/Action/Action';
import { type } from '@testing-library/user-event/dist/type';


const Data = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    const handledelete = (index, id) => {
        dispatch(type:DELETE_PRODUCT_DELETE(id))
    }
    return (
        <div>
            {
                data.product.map((e, index) => {
                    return (
                        <>
                            <div className='design' style={{ border: "2px solid ", display: "inline-block", padding: "10px", marginTop: "10px" }}>
                                <h1>Id:-{e.id}</h1>
                                <h1>Title:-{e.title}</h1>
                                <h1>Author:-{e.author}</h1>
                                <p>
                                    <button onClick={() => handledelete(index, e.id)}>Delete</button>
                                </p>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Data
