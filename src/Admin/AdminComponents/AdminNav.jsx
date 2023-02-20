import React from 'react'
import NewNav from '../../Components/NewNav'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
  const [isAdmin, setisAdmin] = useState(false)
  const navigate =useNavigate()

  const logout =()=>{ 
    localStorage.removeItem('admin')
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }


  return (
    <div className='mb-16'>
      <div className="w-2/3 my-4 mx-auto flex  justify-between">
        <div className='px-3'>
         Admin
        </div>
        <div className='flex gap-4'>
          <div onClick={()=>navigate('/adminOptions')} className='bg-white px-4 cursor-pointer rounded-full shadow text-sm items-center flex hover:scale-105 hover:shadow-lg hover:shadow-stone-500 duration-200'>Home</div>
          <div onClick={()=>navigate('/admin/toBookings')} className='bg-white px-4 cursor-pointer rounded-full shadow text-sm items-center flex hover:scale-105 hover:shadow-lg hover:shadow-stone-500 duration-200'>Bookings</div>
          <div onClick={()=>navigate('/admin/toAccounts')} className='bg-white px-4 cursor-pointer rounded-full shadow text-sm items-center flex hover:scale-105 hover:shadow-lg hover:shadow-stone-500 duration-200'>Accounts</div>
        </div>
       
        <button onClick={logout} className='bg-red-500 text-white  px-4 hover:bg-red-600 rounded text-sm hover:rounded-full hover:duration-500' >Logout</button>

      </div>

    </div>
  )
}

export default AdminNav