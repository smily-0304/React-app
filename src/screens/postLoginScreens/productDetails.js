import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"



const ProductDetails=()=>{
   const routeInformation = useParams()
   const[productDetails1,setProductDetails1]=useState({})
    console.log(routeInformation)
   useEffect(()=>{
    fetchEachproduct(routeInformation.id)
   },[routeInformation.id])
  
   
const fetchEachproduct=(id)=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response=>{
       if(response.status===200){
        setProductDetails1(response.data)
       }else{
        alert("req failed")
       }
    })
}
       


    return(
        <>
        
        {
            Object.keys(productDetails1).length >0
            ?
          
            <>
            
            <img src={productDetails1.image} alt={productDetails1.category} width={150} height={150}/>
            <p>{productDetails1.description}</p>
            <h3>{productDetails1.category}</h3>
            <h3>{productDetails1.price}</h3>
            <h3>{productDetails1.rating.rate}</h3> 
            </>

                  /* <Card key={productDetails1.id} style={{ width: "18rem",margin:"10px" }}>
                    <Card.Img
                      variant="top"
                      src={productDetails1.image}
                      style={{ width: "140px",height:"160px" }}
                    />
                    <Card.Body>
                      <Card.Title>{productDetails1.title}</Card.Title>
                      <Card.Text>{productDetails1.description}</Card.Text>
                      <Card.Text><b>Price : ₹{productDetails1.price}</b></Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  <Card/> */


                
            
            :
            <h5>loading</h5>
        }
       
        </>
        
    )
}
export default ProductDetails