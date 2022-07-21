import { useState, useEffect } from "react";
import Axios from "axios"

const url = 'http://jsonplaceholder.typicode.com'

function useUserApi(){
    const [user, setUser] = useState([])

    useEffect(()=>{
        Axios.get(`${url}/users`)
        .then(res=> {
            console.log('user=',res.data);
            setUser(res.data)        
    }).catch(err=>console.log(err.message))
    },[])

    return {
        users: user
    }

    }
export default useUserApi
