import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = (props) => {
    
    const navigate = useNavigate()
    const toAbout = () =>{
        navigate('/about')
    }
    return (
        <div className='flex justify-center '>
            <div className='  md:grid md:grid-cols-2 w-full px-6'>


                <div className='py-16'style={{height:'60vh'}}>
                    <div className='flex justify-center mt-16'>
                        <div className='w-2/3 '>
                            <label className='font-bold leading-10' style={{ fontSize: '4vw' }} htmlFor="">{props.desc}</label>
                            <p className='flex text-left my-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi earum nemo iure explicabo debitis, minima asperiores autem doloremque voluptatem, a, doloribus architecto dolorem natus impedit. Nostrum sapiente saepe incidunt praesentium.</p>
                            <div className='flex'>
                                <button onClick={toAbout} className='bg-slate-700 text-white px-4 rounded-full py-1'>Read more</button>
                            </div>
                        </div>
                    </div>

                </div>



                <div className='my-auto mx-auto'>
                    <img src="/camping-place-cartoon-composition-with-yellow-tent-lamp-pot-with-dinner-fire-night-sky_1284-54945-removebg-preview.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Main