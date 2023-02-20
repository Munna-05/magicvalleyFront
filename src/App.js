import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage';
import AdminLogin from './Admin/AdminPages/AdminLogin';
import AdminHomePage from './Admin/AdminPages/AdminHomePage';
import NewNav from './Components/NewNav';
import ContactPage from './Pages/ContactPage';
import EventPage from './Pages/EventPage';
import AdminSelect from './Pages/AdminSelect';
import AdminNav from './Admin/AdminComponents/AdminNav';
import { useState } from 'react';
import Accounts from './Admin/AdminPages/Accounts';
import BookingsPage from './Admin/AdminPages/BookingsPage';
import Error from './Pages/Error';
import All_Bookings from './Admin/AdminPages/All_Bookings';
function App() {
  const [isAdmin,setisAdmin] = useState(false)
  const logo = 'magicValley'
  
  const user = localStorage.getItem('user')
useEffect(()=>{
  const isAdmin = localStorage.getItem('admin')
  if(isAdmin) setisAdmin(isAdmin)
  setisAdmin(isAdmin)

},[])  
  return (
      <BrowserRouter>
      {isAdmin?<AdminNav/>:
       <NewNav logo={logo} one='Home' two='About' three='Booking' four='Contacts' five='Events' />
      }
    <div className="App">
     
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/events' element={<EventPage />} />
          <Route path='/user/toBookings' element={<BookingsPage />} />




          {/* admin side */}

          <Route path='/magicAdmin' element={<AdminLogin />} />
          <Route path='adminOptions' element={<AdminSelect/>}/>
          <Route path='/adminHome' element={<AdminHomePage />} />
          <Route path='/admin/toAccounts' element={<Accounts />} />
          <Route path='/admin/toBookings' element={<BookingsPage />} />
          <Route path='/admin/toAllBookings' element={<All_Bookings/>}/>
          <Route path='*' element={<Error />} />



        </Routes>

    </div>
      </BrowserRouter>
  );
}

export default App;
