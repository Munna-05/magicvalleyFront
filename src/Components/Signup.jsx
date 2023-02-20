import React from 'react'


const Signup = () => {
  const signupHandler =()=>{

  }
  return (
    <div>
       <div className='bg-white w-80 px-10 shadow shadow-lg shadow-slate-500 rounded-md pb-7 mx-auto mt-16'>
           
           <div className='flex grid'>
             <label className='my-5 text-xl font-bold text-slate-700 animate-pulse' htmlFor="">Create Your Account</label>
           <label className='text-left text-sm text-slate-500' htmlFor="">Name</label>
           <input type="text" className='border my-1 px-2 py-1 rounded shadow-inner shadow-slate-400 border-slate-200' name="" id="" />

           <label className='text-left text-sm text-slate-500' htmlFor="">Password</label>
           <input type="password" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />

           <label className='text-left text-sm text-slate-500' htmlFor="">Confirm Password</label>
           <input type="password" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />
           

           <label className='text-left text-sm text-slate-500' htmlFor="">Email</label>
           <input type="Email" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />

           <label className='text-left text-sm text-slate-500' htmlFor="">Addres</label>
           <textarea type="text" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />

           <label className='text-left text-sm text-slate-500' htmlFor="">Phone Number </label>
           <input type="text" className='border px-2 py-1 rounded shadow-inner shadow-slate-400 my-1 border-slate-200' name="" id="" />

          

           </div>
           <button className='mt-4 text-white bg-blue-400 hover:bg-blue-600 transition duration-300 px-3 py-2 w-full rounded-lg'>Create Account</button>
        </div>
    </div>
  )
}

export default Signup