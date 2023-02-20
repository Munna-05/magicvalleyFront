import React from 'react'

const BarSection = (props) => {
  return (
    <div className='md:h-20 bg-blue-600 flex md:justify-even shadow shadow-lg shadow-slate-500'>
     <div className='md:grid md:grid-cols-4 gap-8 sm:grid px-6 w-full py-3 my-auto'>
       <span className='text-white font-semibold mx-4'>{props.first}</span>
       <span className='text-white font-semibold mx-4'>{props.second}</span>
       <span className='text-white font-semibold mx-4'>{props.third}</span>
       <span className='text-white font-semibold mx-4'>{props.fourth}</span>
     </div>
    </div>
  )
}

export default BarSection