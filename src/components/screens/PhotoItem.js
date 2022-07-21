import React from 'react'

function PhotoItem(props) {
  const  { title, thumbnailUrl} = props
  return (
    <div className="col-md-12 mt-2 mb-2">
        <div className="card">
            <div className="card-header">
                <h3 className="text-secondary">{title}</h3>
            </div>
            <div className="card-body"><img src={thumbnailUrl} alt="" /></div>
        </div>
    </div>
  )
}

export default PhotoItem