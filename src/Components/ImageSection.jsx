import React from 'react'

const ImageSection = () => {
  return (
    <div className='mt-16 flex justify-center my-10'>
      {/* <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-3'></div>
      <div>
        <img src="" alt="" />
      </div>
      <div></div>
      <div></div>
         */}
         <div className='grid grid-cols-3 gap-3 px-2'>
         <video autoPlay='true' loop muted='false' controls className='w-80 rounded-lg' src="./273549497_1097577864423787_8397652436637930091_n.mp4"></video>
         <video autoPlay='true' loop muted='false' controls className='w-80 rounded-lg' src="./10000000_461508195390190_3300424662682645885_n.mp4"></video>
         <video autoPlay='true' loop muted='false' controls className='w-80 rounded-lg' src="./262924073_1215543978973772_7541910709457623748_n.mp4"></video>


         </div>

    </div>
  )
}

export default ImageSection