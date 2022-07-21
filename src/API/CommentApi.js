import { useState, useEffect } from "react";
import Axios from "axios";

const url= 'https://jsonplaceholder.typicode.com';

export default function useCommentApi(){
    const [comment, setComment] =useState([]);

    useEffect(()=>{
        Axios.get(`${url}/comments`)
        .then(res=>{
            console.log('comments=',res.data)
            setComment(res.data)
        }).catch(err=> console.log(err.message));
    },[]);

    return {
        comments: comment
    }
    
}