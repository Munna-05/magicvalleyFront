import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SelectOption = () => {
    const navigate = useNavigate()

    const toAccount = () => {
        navigate('/admin/toAccounts')
    }
    const toBookings = () => {
        navigate('/admin/toBookings')
    }
    
    return (

        <div className=''>
            <div className='mt-16  pt-16 '>
                <div className='w-fit mx-auto md:flex'>
                    <div onClick={toAccount} className='mx-auto shadow shadow-md mt-5 shadow-black text-xl pt-16 text-slate-200 hover:text-white capitalize h-40 w-60 mx-5 
                    bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 
                    rounded-lg
                hover:bg-sky-600 cursor-pointer
                hover:shadow-lg  hover:shadow-black transition  duration-200'>
                        <span className=''>Accounts</span>
                    </div>
                    <div onClick={toBookings} className='mx-auto shadow shadow-md mt-5 shadow-black text-xl pt-16 text-slate-200 hover:text-white capitalize h-40 w-60 mx-5 
                      bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 
                    rounded-lg
                hover:bg-sky-600  cursor-pointer
                hover:shadow-lg hover:shadow-black transition duration-200'>Bookings</div>

                </div>
            </div>
        </div>
    )
}
