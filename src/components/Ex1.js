import React,{useContext, useState} from 'react'
import {GlobalContext} from '../GlobalContext'
import PostItem from './screens/PostItem';

function Ex1() {
  const data= useContext(GlobalContext);
  const posts = data.postApi.posts
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-success">Posts</div>
        </div>
      </div>
      <div className="row">
        {
          posts.map((item, index) =>{
            return (
              <PostItem key={index} {...item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Ex1