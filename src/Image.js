import React from 'react'
import img1 from './image/Screenshot from 2022-06-20 18-14-24 (1) (4).png'
import img2 from './image/Screenshot from 2022-06-20 18-14-24 (1) (5).png'
export default function Image() {
  return (
    <div className='image'>
    <div className='logo2'>
     <a href="//"><img  src={img1} alt="" /></a>
     <a href="//"><img  src={img2} alt="" /></a>
    </div>
    
  </div>
   
  )
}
