import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com';

function usePhotoApi() {
    const[photo, setPhoto] = useState([])
   
    useEffect(()=>{
       Axios.get(`${url}/photos`)
       .then(res=> {
        console.log(res.data)
        setPhoto(res.data)
       }).catch(err=>console.log(err.message));
    },[])

   

  return {
    photos: photo
  }
}

export default usePhotoApi