import React from 'react'

const Footer = (props) => {
  return (
    <div className='bg-blue-600 mt-16 h-80'>
        <div className='grid grid-cols-5 gap-4 p-16 '>
            <div className='mt-10'>
                <span className='text-lg flex mb-1  font-bold text-slate-200'>{props.companyName}</span>
                <p className='text-xs text-slate-300 text-left w-3/4'>{props.desc}</p>
            </div>
            {/* <div>
                <span className='text-white text-sm font-semibold'>{props.one}</span>
            </div>
            <div>
                <span className='text-white text-sm font-semibold'>{props.two}</span>
            </div>
            <div>
                <span className='text-white text-sm font-semibold'>{props.three}</span>
            </div>
            <div>
                <span className='text-white text-sm font-semibold'>{props.four}</span>
            </div> */}
            
        </div>
        <span className='text-sm text-white underline cursor-pointer'>www.magicvalley.in</span>

    </div>
  )
}

export default Footer