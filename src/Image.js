import React from 'react'
import img1 from './image/image1.png'
import img2 from './image/logo.png'
export default function Image() {
  return (
    <div className='ImagePage'>
    <div className='logo2'>
      <a href=""><img className='logoimg' src={img2} alt="" /></a>
    </div>
    <div className='image'>
      <img className='mainimg' src={img1} alt="" />
  </div>
   </div>
  )
}
