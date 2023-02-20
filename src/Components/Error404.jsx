import React from 'react'
import './error.css'
const Error404 = () => {
    return (
        <div className='bg-purple-900 h-screen'>
            <div class="text-white pt-16 mx-auto w-80">
                <div className=''>ERROR</div>
                <h1>404</h1>
                <hr></hr>
                    <div className='w-80 pt-5'>Page Not Found</div>
            </div>

            <div className="astronaut">
                <img src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" alt="" />
            </div>
        </div>
    )
}

export default Error404