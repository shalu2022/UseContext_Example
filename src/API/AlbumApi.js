import { useState, useEffect } from "react";
import Axios from "axios";

const url= 'https://jsonplaceholder.typicode.com';

export default function useAlbumApi(){
    const [album, setAlbum] =useState([]);

    useEffect(()=>{
        Axios.get(`${url}/albums`)
        .then(res=>{
            console.log('albums=',res.data)
            setAlbum(res.data)
        }).catch(err=> console.log(err.message));
    },[]);

    return {
        albums: album
    }
    
}