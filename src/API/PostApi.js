import { useState, useEffect } from "react";
import Axios from "axios";

const url= 'https://jsonplaceholder.typicode.com';

export default function usePost(){
    const [post, setPost] =useState([]);

    useEffect(()=>{
        Axios.get(`${url}/posts`)
        .then(res=>{
            console.log('posts=',res.data)
            setPost(res.data)
        }).catch(err=> console.log(err.message));
    },[]);

    return {
        posts:post
    }
    
}