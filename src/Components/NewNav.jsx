import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NewNav = (props) => {
    const navigate = useNavigate()
        const toLogin = () => {
        navigate('/login')
    }
    const [admin,setAdmin] = useState(false)
    useEffect(()=>{

        if(props.admin) setAdmin(props.admin)
       
        
    },[props.admin])
    const logout=() => {
        localStorage.removeItem('admin')

    
    }
    const login=() => {
        localStorage.removeItem('admin')

    
    }
    return (
        <div className=''>

            <nav className=" px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 ">
                <div className=" flex justify-between mx-auto">

                    <div className='flex items-center'> <a href='/' className=" text-xl mx-5 font-semibold text-black">{props.logo}</a></div>

                    {/* <div className="flex md:order-2">
                        {admin ?

                            <button onClick={logout} className="text-white bg-blue-600 hover:bg-blue-800 cursor-pointer font-sm rounded-lg text-sm py-2.5 px-3 h-10 text-center mx-5 md:mr-0 0">Log out</button>
                            :

                            <button onClick={toLogin} className="text-white bg-blue-600 hover:bg-blue-800 cursor-pointer font-sm rounded-lg text-sm py-2.5 px-3 h-10 text-center mx-5 md:mr-0 0">Login</button>
                        }

                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div> */}
                    <div className="items-center flex  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                            <li>
                                <a href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent text-black md:p-0 " aria-current="page">{props.one}</a>
                            </li>
                            <li>
                                <a href="/about" className="block py-2 pl-3 pr-4 text-black rounded  md:p-0">{props.two}</a>
                            </li>
                            {/* <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-black">{props.three}</a>
                            </li>
                            <li>
                                <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-black">{props.four}</a>
                            </li>
                            <li>
                                <a href="/events" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 text-black">{props.five}</a>
                            </li> */}
                        </ul>
                    </div>
                    
                </div>
            </nav>



        </div>
    )

}
export default NewNav