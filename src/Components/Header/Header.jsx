import React from 'react'
import './Header.css'
const Header = () => {
  return (
      <div className='header'>
          <div className='header-title'>
              <span className='header-titleSm'>React & Node</span>
              <span className='header-titleLg'>Blog</span>
          </div>
          <img
              className='headerImg'
              src='https://images.pexels.com/photos/2467390/pexels-photo-2467390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
    </div>
  )
}

export default Header