import React from 'react'
import navIcon1 from './images/navIcon1.png'
import navIcon2 from './images/navIcon2.png'
import navIcon3 from './images/navIcon3.png'
import './head.css'


const Head = () => {
  return (
    <>
    <h1 className='brand'>ChatwithAi</h1>
    <div className="social-icon">
    <a href=""><img src={navIcon1} alt="" /></a>
    <a href=""><img src={navIcon2} alt="" /></a>
    <a href=""><img src={navIcon3} alt="" /></a>
  </div>
  </>

  )
}

export default Head