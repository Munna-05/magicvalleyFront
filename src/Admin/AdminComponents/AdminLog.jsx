import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLog = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [button ,setButton] = useState(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const navigate = useNavigate()
    const admin = localStorage.getItem('admin')

  useEffect(()=>{
    
    if(admin) navigate('/adminOptions')
    if(username==='admin' && password==='admin123'){
        setIsAdmin(true)
        setButton(true)
    }else{
        setButton(false)
    }
  },[username,password])

  const toAdminHome =()=>{
    window.location.reload()
    navigate('/adminOptions')
    localStorage.setItem('admin',isAdmin)
  }
  
  return (
    <div className='pt-16'>
        <div className='flex justify-center mt-16'>
            <div className='mt-16 bg-blue-500 h-fit px-5 transition duration-500 ease-in-out rounded-lg shadow shadow-lg shadow-slate-700  py-8 '>
                <span className='font-bold text-2xl text-slate-100'>Admin Login </span>
                <div className='w-80 mx-auto mt-10'>
                    <input onChange={(e)=>setUsername(e.target.value)} className='m-2 rounded shadow text-sm px-2 py-1' placeholder='Username' type="text" name="" id="" />
                    <input onChange={(e)=>setPassword(e.target.value)} className='m-2 rounded shadow text-sm py-1 px-2' placeholder='Password' type="password" name="" id="" />
                </div>
            </div>
        </div>
                    {
                        button?
                        <button onClick={toAdminHome} className='bg-blue-500 text-white shadow-slate-500 shadow shadow-md hover:shadow-lg hover:shadow-lg hover:shadow-slate-700 transition duration-500 ease-in-out mt-4 px-5 py-1 rounded-lg'>Login</button>
                        
                        :
                        null
                    }
    </div>
  )
}

export default AdminLog