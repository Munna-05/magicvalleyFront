import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const toSignup = () => {
    navigate('/signup')
  }


  const loginHandler = () => {
    console.log(email , password)

    if (email && password) toast.success(email , password) 
    toast.error(email,password)

  }



return (
  <div >
    <ToastContainer />
    <div className='bg-white h-80 w-80 px-10 rounded-md shadow shadow-md shadow-slate-400 py-5  mx-auto mt-16'>

      <div className='flex grid'>
        <label className='my-5 text-xl font-bold text-slate-700 animate-pulse' htmlFor="">Magic valley</label>
        <label className='text-left text-sm text-slate-500' htmlFor="">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} required type="Email" className='border my-1 px-2 py-1 rounded shadow-inner shadow-slate-400 border-slate-200' name="" id="" />
        <label className='text-left text-sm text-slate-500' htmlFor="">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} required type="password" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />
      </div>
      <button onClick={loginHandler} className='mt-4 text-white bg-blue-400 hover:bg-blue-600 transition duration-300 px-3 py-2 w-full rounded-lg'>Login</button>
      <p onClick={toSignup} className='text-left cursor-pointer text-xs mt-2'>Create Account</p>
    </div>

  </div>
)
}

export default Login