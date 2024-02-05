import axios from "axios"
import { useEffect, useState } from "react"


const UseEffect1=()=>{
    const[productlist,setproductlist]=useState([])
    useEffect(()=>{
        fetchData()
        console.log("component mount");

    },[])
    // tThis function for fetching the data from  server to client
    const fetchData=()=>{
    // axios 
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{
        console.log(response);
        if(response.status===200){
            // successfully data came
            setproductlist(response.data)
        }
    })
       
 
    }
    return(
        <>
        <h3>this is Useeffect</h3>
        {
            productlist.length>0 ? productlist.map(product=><ProductListing key={product.id} data={product}/>)
            :<h1>loading</h1>
        }
        </>
    )
}
export default UseEffect1

const ProductListing=({data})=>{
    return(
        <>
        <div>
          <div>
            <p>{data.id}</p>
            <h3>{data.category}</h3>
            <h5>{data.description}</h5>
            <p>{data.title}</p>
          </div>
        </div>
        </>

    )
}