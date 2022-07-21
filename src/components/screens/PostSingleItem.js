import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const url = "https://jsonplaceholder.typicode.com";

function PostSingleItem(props) {
    const params = useParams();
    console.log('id =',params.id);
    const [post,setPost] = useState({
        id:"",
        title: "",
        body: "",
        userId: ""
    });

    useEffect(() => {
        Axios.get(`${url}/posts/${params.id}`)
            .then(res=> {
                console.log('single item =', res.data);
                setPost(res.data);
            }).catch(err => console.log(err.message));
    },[])

  return (
    <div className="col-md-12 mt-2 mb-2">
        <div className="card">
            <div className="card-header">
                <h4 className="text-secondary"> {post.id} - {post.title} </h4>
            </div>
            <div className="card-body">
                <p> {post.body} </p>
            </div>
        </div>
    </div>
  )
}

export default PostSingleItem