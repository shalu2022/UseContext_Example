import { useState, useEffect } from "react";
import Axios from "axios";

const url= 'https://jsonplaceholder.typicode.com';

export default function useTodoApi(){
    const [todo, setTodo] =useState([]);

    useEffect(()=>{
        Axios.get(`${url}/todos`)
        .then(res=>{
            console.log('todos=',res.data)
            setTodo(res.data)
        }).catch(err=> console.log(err.message));
    },[]);

    return {
        todos: todo
    }
    
}