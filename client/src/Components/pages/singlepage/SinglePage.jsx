import React from 'react'
import SideBar from '../../sidebar/SideBar'
import SinglePost from '../../singlepost/SinglePost'
import './SinglePage.css'
const SinglePage = () => {
  return (
      <div className='single'>
          <SinglePost/>
          <SideBar/>
    </div>
  )
}

export default SinglePage