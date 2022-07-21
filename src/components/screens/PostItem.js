import React from 'react'
import { NavLink } from 'react-router-dom';

function PostItem(props) {
    const {id, title, body} = props;

//  function singlePostHandler(e){
//     window.open(<NavLink to={'/singlepost'} className="nav-link"><PostSingleItem /></NavLink>)    
//   }


  return (
    <div className="col-md-12 mt-2 mb-2">
        <div className="card">
            <div className="card-header">
                {/* <a onClick={singlePostHandler} target={'_blank'} className="text-secondary">{id}{title}</a> */}
                <NavLink to={`/singlepost/${id}`} className="btn btn-link">{id} {title} </NavLink>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    </div>
  )
}

export default PostItem