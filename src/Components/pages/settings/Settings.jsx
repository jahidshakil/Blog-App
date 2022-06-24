import React from 'react'
import './Settings.css'
import SideBar from '../../sidebar/SideBar'
const Settings = () => {
  return (
      <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsProfilePicture'>
            <img src='https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=400' alt='' />
            <label htmlFor='fileInput'>
              <i className='settingsProfileIcon far fa-user-circle'></i>
            </label>

            <input type='file' id="fileInput"  style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="jahid" />
          <label>Email</label>
          <input type="email" placeholder="jahid@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className='settingSubmit'>Update</button>
        </form>
      </div>
      <SideBar/>
    </div>
  )
}

export default Settings