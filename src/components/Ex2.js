import React,{useContext, useState} from 'react'
import {GlobalContext} from '../GlobalContext'
import UserItem from './screens/UserItem';

function Ex2() {
  const data= useContext(GlobalContext);
  const users = data.userApi.users
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-success">Users</div>
        </div>
      </div>
      <div className="row">
        {
          users.map((item, index) =>{
            return (
              <UserItem key={index} {...item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Ex2