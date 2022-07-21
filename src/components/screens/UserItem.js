import React from 'react'

function UserItem(props) {
    const {id, name, email, phone, website, address} = props;
  return (
    <div className="col-md-4 mt-2 mb-2">
        <div className="card">
            <div className="card-header">
                <h6 className="text-secondary">{id}.{' '}{name}</h6>
            </div>
            <div className="card-body">
                <p>Email ID: {email}</p>
                <p>Phone No.: {phone}</p>
                <p>Website: {website}</p>
                <p>Address: {address.city}</p>
            </div>
        </div>
    </div>
  )
}

export default UserItem