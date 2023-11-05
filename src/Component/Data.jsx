import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PRODUCT_PROGRESS, GET_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS, UPDATE_PRODUCT_PROGRESS } from '../Redux_saga/Product/Action/Action';
import Swal from 'sweetalert2'



const Data = () => {
    const Swal = require('sweetalert2')

    const [fdata, setfdata] = useState({});
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])

    const chnage = (e) => {
        setfdata({ ...fdata, [e.target.name]: e.target.value });
    }

    const submitdata = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
                dispatch({ type: POST_PRODUCT_PROGRESS, payload: fdata });
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

        console.log(fdata);
        setfdata({})
    }

    const removedata = (id) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been deleted',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch({ type: DELETE_PRODUCT_PROGRESS, payload: id })
    }

    const viewdata = (e) => {
        // console.log(e);
        setfdata(e)
    }

    const updatedata = () => {
        console.log(fdata);
        dispatch({ type: UPDATE_PRODUCT_PROGRESS, payload: fdata })
        setfdata({})
    }
    return (
        <div >
            <div className='box'>
                <form>
                    <span className="text-center">login</span>

                    <div className='input-container'>
                        <input className='mb-5' type="text" name='title' onChange={chnage} value={fdata.title || ""} required="" />
                        <label>Fist Name</label>
                    </div>

                    <div className='input-container'>
                        <input type="text" name='author' onChange={chnage} value={fdata.author || ""} required="" />
                        <label>Last Name</label>
                    </div>
                    <button type='button' className='btn mr-3' onClick={submitdata}>Submit</button>
                    <button type='button' className='btn' onClick={updatedata}>Updata</button>

                </form>

                <table className='mt-5'>
                    <thead>
                        <tr>
                            <th>Id:-</th>
                            <th>Title:-</th>
                            <th>Name:-</th>
                            <th>Action:-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.product.map((e, index) => {
                                return (
                                    <>
                                        <tr className='design' key={index}>
                                            <td>{e.id}</td>
                                            <td>{e.title}</td>
                                            <td>{e.author}</td>
                                            <td>
                                                <button className='mr-2' onClick={() => removedata(e.id)}>Delete</button>
                                                <button onClick={() => viewdata(e)}>Edit</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Data
