import React from 'react'
import moment from 'moment'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useEffect } from 'react';


const TransactionTable = ({ details, name, monthly, Date, text }) => {
    const [data,setData] = React.useState([])
    const[reload,setreload] = React.useState(false)
  
    const edit = (id) => {
        toast.success('edit', { autoClose: 500 })
    }
    let deleteDoc

    if(name==="Income"){
        deleteDoc = (id,text) => {
            axios.delete(`http://localhost:5000/admin/delete_income/${id}`).then((res) => {
                if (res) {
                    console.log(res)
                    toast.error(`deleted Income of ${text}/-`, { autoClose: 1000 })
                    setTimeout(() => {
                        window.location.reload()
                    }, 1200);
                    setreload(!reload)
                }
            })
        }
    }else{
        deleteDoc = (id,text) => {
            axios.delete(`http://localhost:5000/admin/delete_expense/${id}`).then((res) => {
                if (res) {
                    console.log(res)
                    toast.error(`deleted expense of ${text}/-`, { autoClose: 1000 })
                    setTimeout(() => {
                        window.location.reload()
                    }, 1200);
                    setreload(!reload)
                    // window.location.reload()

                    
                }
            })
        }
    }

    return (
        <div>
            <ToastContainer />

            <div className={`overflow-x-auto bg-slate-800 border relative shadow-md sm:rounded-lg`} style={{ height: '70vh', width: '38vw' }}>
                <table className="w-full text-sm text-left text-gray-500 overflow-y-scroll dark:text-gray-400">
                    <thead className="text-xs  text-gray-700 sticky top-0 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 text-center px-6">
                                {name} From

                            </th>
                            <th scope="col" className="py-3 text-center  px-6">
                                {name} Amount
                            </th>
                            <th scope="col" className="py-3 text-center px-6">
                                {Date}
                            </th>

                            <th scope="col" className="py-3 text-center px-6">
                                Options
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {details.map((result) => {
                            return (
                                <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 text-center px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {result.text}
                                        </th>
                                        <td className={`py-4 px-6 text-center ${text}`}>
                                            {result.amount}
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            {moment(result.createdAt).format('lll')}
                                        </td>

                                        <td className="py-4 px-6 flex align-center text-center">
                                            {/* <button onClick={()=>edit(result._id)} className=' text-xs mt-2  bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 rounded-lg'>Edit</button> */}
                                            <button onClick={() => deleteDoc(result._id,result.amount)} className='mx-2 mt-2 text-xs  bg-red-500 text-white p-1 px-2 hover:bg-red-600 rounded-lg'>Delete</button>
                                        </td>

                                    </tr>
                                </>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TransactionTable