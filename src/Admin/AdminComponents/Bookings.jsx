import moment from 'moment'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'


const Bookings = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [number, setNumber] = useState()
  const [bookingDate, setBookingDate] = useState('')
  const [checkout, setCheckout] = useState('')
  const [numberOfppl, setNumberOfppl] = useState('')
  const navigate = useNavigate()

  const admin = localStorage.getItem('admin')
  const user = localStorage.getItem('user')
  useEffect(() => {

    // if (!admin) navigate('/magicAdmin')



  }, [])

  const bookingDetails = {
    name: name,
    address: address,
    phone: number,
    booking: bookingDate,
    date: moment(Date.now()).format('ll'),
    checkout:checkout,
    numberOfPeople:numberOfppl
  }

  const handleSubmit = () => {
    if (name === '' || address === '' || number === '' || bookingDate === '') {
      toast.error('Enter all Booking Details', { autoClose: 1000 })
    } else {
      toast.success('Booking Successfull', { autoClose: 600 })
      axios.post('http://localhost:5000/admin/add_booking',bookingDetails).then((res)=>{
        setAddress('')
        setName('')
        setNumber()
        setBookingDate('')
        console.table(bookingDetails)
      })
     
    }
  }
  const toAllBookings = () => {
    navigate('/admin/toAllBookings')
  }
  return (
    <div>
      <ToastContainer />
      <div className=' items-center p-10 w-full'>
        <div className=' mx-auto shadow shadow-md shadow-slate-600 md:w-1/4 sm:w-1/4 lg:w-1/4 pb-5 pt-1 px-1 bg-white mt-16' style={{ height: 'auto' }}>
          <div className='bg-blue-600 text-lg font-bold text-white py-5 ' style={{ width: 'auto' }}>Add Booking</div>

          <input value={name} required placeholder='Enter Name' onChange={(e) => setName(e.target.value)} type="text" className='bg-slate-200 py-1 px-2 text-sm mt-16 w-2/3 rounded my-2 mx-2' />
          <textarea value={address} required placeholder='Enter Address' onChange={(e) => setAddress(e.target.value)} type="text" className='bg-slate-200 h-20 py-1 px-2 text-sm w-2/3 rounded my-2 mx-2' />
          <input value={number} required placeholder='Enter Phone Number' onChange={(e) => setNumber(e.target.value)} minLength={10} maxLength={10} type="Number" className='bg-slate-200 py-1 px-2 text-sm w-2/3 rounded my-2 mx-2' />
          <label className='text-sm flex py-1 px-10 ml-7 text-sm w-2/3 rounded my-2 mx-2' htmlFor="">Check in Date</label>
          <input value={bookingDate} required placeholder='' type="date" onChange={(e) => setBookingDate(e.target.value)} className='bg-slate-200 py-1 px-2 text-sm w-2/3 rounded my-2 mx-2' /> <br />
          <label className='text-sm flex py-1 px-10 ml-7 text-sm w-2/3 rounded my-2 mx-2' htmlFor="">Check out Date</label>
          <input value={checkout} required placeholder='' type="date" onChange={(e) => setCheckout(e.target.value)} className='bg-slate-200 py-1 px-2 text-sm w-2/3 rounded my-2 mx-2' />
          <input value={numberOfppl} required placeholder='Number of People' onChange={(e) => setNumberOfppl(e.target.value)} minLength={10} maxLength={10} type="Number" className='bg-slate-200 py-1 px-2 text-sm w-2/3 rounded my-2 mx-2' />

          <div className=''>
            <button type='submit' onClick={handleSubmit} className='mx-auto mt-5 bg-blue-500 px-5 py-1 text-white' style={{ width: '17vw' }}>Add</button>
          </div>
        </div>

       {admin?
        <div className='text-right md:w-1/4 sm:w-1/4 lg:w-1/4 mx-auto'>
        <button onClick={toAllBookings} className='mt-5 bg-slate-500 px-5  py-2 text-white hover:bg-opacity-50 hover:bg-blue-500
        transition duration-200
        hover:border hover:text-black hover:border-black

        '>View all Bookings</button>
      </div>:null}
      </div>
    </div>
  )
}

export default Bookings