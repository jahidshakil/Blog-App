import React from 'react'
import './Post.css'
const Post = () => {
  return (
      <div className='post'>
          <img
              className='postimg'
              src='https://images.pexels.com/photos/5974723/pexels-photo-5974723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          
          <div className='postInfo'>
              <div className='postCatgories'>
                  <span className='postCatagory'>Music</span>
                  <span className='postCatagory'>Life</span>
              </div>

              <span className='postTitle'>
                  Lorem ipsum Lorem ipsum  Lorem ipsum 
              </span>
              <hr />
              <span className='postDate'>1 hour ago</span>
          </div>
          <p className='postDesc'>lorem Ipsum  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumv lorem Ipsum  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumv lorem Ipsum  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumv lorem Ipsum  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumv lorem Ipsum  lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumlorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsumv</p>
    </div>
  )
}

export default Post