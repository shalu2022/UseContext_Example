import React from 'react'

function AlbumItem(props){
    const { id, title} = props
    
    return (
       <div className="col-md-4 mt-2 md-2">
         <div className="card">
            <div className="card-header">
                <h6 className='text-secondary text-center'>{id}</h6>
            </div>
            <div className="card-body">
                <p>{title}</p>
            </div>
         </div>
       </div>

    )
}
export default AlbumItem