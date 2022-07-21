import React from 'react'

function CommentItem(props){
    const {id, name, email,body} = props
    
    return (
       <div className="col-md-12 mt-2 md-2">
         <div className="card">
            <div className="card-header">
                <h6 className='text-secondary text-center'>{id}.{' '}{name}</h6>
            </div>
            <div className="card-body">
                <p>Email: {email}</p>
                <p>{body}</p>
            </div>
         </div>
       </div>

    )
}
export default CommentItem