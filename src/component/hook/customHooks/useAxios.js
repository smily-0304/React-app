import axios from "axios"
import { useEffect, useState } from "react"



// design a hook which accepts the url and return the data by using prefined hooks
 export const useAxios=(url="https://fakestoreapi.com/products")=>{
    const[data,setData]=useState([])
    useEffect(()=>{
    handleFetchData()
    },[])

    const handleFetchData=()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)})
    }
    return [data]
}