import React from 'react'

const Second = (props) => {
    return (
        <div className='flex justify-center mt-5 '>
            <div className='md:grid md:grid-cols-4 w-2/3'>
                <div className='w-60 mx-auto mt-16'>
                    <div className='my-auto text-left'>
                        <span className='font-bold text-slate-800 text-left leading-5 ' style={{ fontSize: '2vw' }}>Why {props.companyName} ?</span>
                        <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='w-60 mt-8 mx-auto'>
                    <img className='h-10 mb-3' src="/earth.png" alt="" />
                    <span className='flex font-semibold'>{props.one}</span>
                    <span className='flex text-left text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, dicta.</span>
                </div>

                <div className='w-60 mt-8 mx-auto'>
                    <img className='h-10 mb-3' src="/tent.png" alt="" />
                    <span className='flex font-semibold'>{props.two}</span>
                    <span className='flex text-left text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, dicta.</span>
                </div>

                <div className='w-60 mt-8 mx-auto'>
                    <img className='h-10 mb-3' src="/greenTick.png" alt="" />
                    <span className='flex font-semibold'>{props.three}</span>
                    <span className='flex text-left text-sm text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, dicta.</span>
                </div>

            </div>
        </div>
    )
}

export default Second