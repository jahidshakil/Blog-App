import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
      <div className='Sidebar'>
          <div className='sideBarItem'>
              <span className='sideBarTitle'>ABOUT ME</span>
              <img src='https://images.pexels.com/photos/1369476/pexels-photo-1369476.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
              <p>lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum</p>
          </div>

          <div className='sideBarItem'>
              <span className='sideBarTitle'>CATAGORIES</span>
              <ul className='sideBarList'>
                  <li className='sideBarListItem'>Life</li>
                  <li className='sideBarListItem'>Music</li>
                  <li className='sideBarListItem'>Style</li>
                  <li className='sideBarListItem'>Cinema</li>
                  <li className='sideBarListItem'>Tech</li>
              </ul>
          </div>
          <div className='sideBarItem'>
          <span className='sideBarTitle'>FOLLOW US</span>
              <div className='sideBarSocial'>
                <i class=" sideBarIcon fa-brands fa-facebook-square"></i>
                <i class=" sideBarIcon fa-brands fa-twitter"></i>
                <i class=" sideBarIcon fa-brands fa-instagram-square"></i>
                <i class=" sideBarIcon fa-brands fa-pinterest-square"></i>
              </div>
          </div>
    </div>
  )
}

export default SideBar