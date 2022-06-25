import React from 'react'
import { Link } from 'react-router-dom';
import './TopBar.css';

const Topbar = () => {
  const user = false;
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
          
          <li className=' toplist-item'>
            <Link className='link' to='/'>HOME</Link>
          </li>
          <li className=' toplist-item'>
            <Link className='link' to='/'>ABOUT</Link></li>
          <li className=' toplist-item'>
          <Link className='link' to='/'>CONTACT</Link>
          </li>
          <li className=' toplist-item'>
          <Link className='link' to='/write'>WRITE</Link>
          </li>
          <li className=' toplist-item'>
          {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='top-right'>
        {user ? (
          <img
        className='topImg'
        src='https://images.pexels.com/photos/2723116/pexels-photo-2723116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
        ) : (
            <ul className='toplist'>
              <li className='toplist-item'>
                <Link className='link' to='/login'>LOGIN</Link>
              </li>
              
              <li className='toplist-item'>
                 <Link className='link' to='/register'>REGISTER</Link>
              </li>
            </ul>
        )
        }
      
      <i className='topSearchIcon fas fa-search'></i>
      </div>
      
      </div>
  )
}

export default Topbar