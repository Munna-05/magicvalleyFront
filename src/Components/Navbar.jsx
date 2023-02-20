import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const navigate = useNavigate()
    const toLogin = () => {
        navigate('/login')
    }
    const toSignup =()=>{
        navigate('/signup')
    }
    const toHome=()=>{
        navigate('/')
    }
    const toAbout = () =>{
        navigate('/about')
    }
    return (
        <div className='flex justify-between w-full py-2'>
            <div className='grid grid-cols-3 px-6 w-full'>
                <label onClick={toHome} className='font-bold my-auto cursor-pointer m-1 text-lg'>{props.logo}</label>
                {/* <span>{props.logo}</span> */}
                <div className='m-1 my-auto grid grid-cols-5'>
                    <label onClick={toHome} className='mx-4 text-sm sm:border' htmlFor="">{props.one}</label>
                    <label onClick={toAbout} className='mx-4 text-sm ' htmlFor="">{props.two}</label>
                    <label className='mx-4 text-sm ' htmlFor="">{props.three}</label>
                    <label className='mx-4 text-sm ' htmlFor="">{props.four}</label>
                    <label className='mx-4 text-sm ' htmlFor="">{props.five}</label>
                </div>
                {props.loginpage ?
                      <div>
                      {/* <button onClick={toLogin} className='w-20 m-1 bg-slate-800 text-white border rounded-full py-1 border-black '>Login</button> */}
                      <button onClick={toSignup} className='w-20 m-1 border rounded-full py-1 border-black '>Register</button>
                  </div>

                    :

                    <div className=''>
                        <button onClick={toLogin} className='w-20 m-1 bg-slate-800 text-white border rounded-full py-1 border-black '>Login</button>
                        <button onClick={toSignup} className='w-20 m-1 border rounded-full py-1 border-black '>Register</button>
                    </div>
                }
            </div>

        </div>
    )
}

export default Navbar