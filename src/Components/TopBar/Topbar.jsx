import React from 'react'
import './TopBar.css';

const Topbar = () => {
  return (
    <div className='top'>
      <div className='top-left'>
      <i class=" topIcon fa-brands fa-facebook-square"></i>
        <i class=" topIcon fa-brands fa-twitter"></i>
        <i class=" topIcon fa-brands fa-instagram-square"></i>
        <i class=" topIcon fa-brands fa-pinterest-square"></i>

      
      </div>
      <div className='top-center'>
        <ul className='toplist'>
          <li className=' toplist-item'>HOME</li>
          <li className=' toplist-item'>ABOUT</li>
          <li className=' toplist-item'>CONTACT</li>
          <li className=' toplist-item'>WRITE</li>
          <li className=' toplist-item'>LOGOUT</li>
        </ul>
      </div>
      <div className='top-right'>
      <img
        className='topImg'
        src='https://images.pexels.com/photos/2723116/pexels-photo-2723116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      <i className='topSearchIcon fas fa-search'></i>
      </div>
      
      </div>
  )
}

export default Topbar