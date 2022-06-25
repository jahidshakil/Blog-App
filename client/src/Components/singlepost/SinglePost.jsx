import React from 'react'
import './SinglePost.css'
const SinglePost = () => {
  return (
      <div className='singlepost'>
          <div className='singlePostWrapper'>
              <img
                  className='singlePostImg'
                  src='https://images.pexels.com/photos/1813227/pexels-photo-1813227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
              <h1 className='singlePostTitle'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  <div className='singlePostEdit'>
                      <i className=' singlePostIcon far fa-edit'></i>
                      <i className=' singlePostIcon far fa-trash-alt'></i>
              </div>
              </h1>
              <div className='singlePostInfo'>
                  <span className='singlePostAuthor'>Author: <b>Jahid</b></span>
                  <span className='singlePostDate'>1 hour ago</span>
              </div>
              <p className='singlePostDesc'>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points. Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points. Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or process; narrate a series of events; compare or contrast two or more things; classify items into categories; or describe causes and effects. Regardless of the kind of information they contain, all paragraphs share certain characteristics. One of the most important of these is a topic sentence.</p>
          </div>
      </div>
  )
}

export default SinglePost