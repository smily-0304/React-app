
import { useContext, useEffect, useState } from "react"
import UseEffect2 from "../../component/hook/useEffect/useEffect2"
import UseEffect3 from "../../component/hook/useEffect/useEffect3"
import UseEffect1 from "../../component/hook/useEffect/useEffectEx1"
import NavBar from "../../component/navBar/navBar"
import axios from "axios"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"
import { useAxios } from "../../component/hook/customHooks/useAxios"
import { useCounter } from "../../component/hook/customHooks/useCounter"
import Footer from "../../component/navBar/footer"


const HomeScreen=()=>{
    // const[productlist,setproductlist]=useState([])
    const[totalPrice,setTotalPrice]=useState(null)
    const{darkTheme,changeTheme}=useContext(DataShare)
     const[productsListing]=useAxios("https://fakestoreapi.com/products")
    //  const[count,incrementCount,decrementCount]=useCounter()
   
    // useEffect(()=>{
    //     fetchData()
    //     console.log("component mount");

    // },[])
    // // tThis function for fetching the data from  server to client
    // const fetchData=()=>{
    // // axios 
    // axios.get("https://fakestoreapi.com/products")
    // .then(response=>{
       
    //     if(response.status===200){
    //        const newResponse= response.data.map(eachObj=>{
    //             return{...eachObj,count:1,total:eachObj.price}
    //         })
            
    //         // successfully data came
    //         setproductlist(newResponse)
    //         const result=summOfprice(response.data)
    //         setTotalPrice(result);
    //     }
    // })
       
 
    // }
    // this function is for claculation of sum of property value
   
   
    const summOfprice=(arrayOfObjects)=>{
        const result=arrayOfObjects.reduce((initial,eachObject)=>initial+eachObject.price,0)
        return result
    }

   
    const controlTheme=()=>{
        changeTheme()
    }
    return(
        <>
        <NavBar/>
        <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div>
        <button onClick={controlTheme}>color change</button>
        {/* <button onClick={incrementCount}>+</button>
        <spam>{count}</spam>
        <button onClick={decrementCount}>-</button> */}
       
        <h1>Total value of products {totalPrice}</h1>
      
        
        {/* {
            productsListing?.length>0 ? productsListing.map(product=><ProductListingComponent key={product.id} data={product}/>)
            : null
        } */}

{
  productsListing?.length > 0 ? (
    productsListing.map(product => (
      <ProductListingComponent key={product.id} data={product} />
    ))
  ) : null
}
      <Footer/>
       
        </>
    )
}
export default HomeScreen



const ProductListingComponent=({data})=>{

    const[count,setCount]=useState(1)

    const handleIncrement=()=>{
       
        setCount((count)=>count+1)

    }

    const handleDecrement=()=>{
        
        if(count>1){
            setCount((count)=>count-1)

        }
    }
    return(
        <>
        <div>
          <div>
            <p>{data.id}</p>
          
            <h3>{data.category}</h3>
            <img src={data.image} alt={data.category} width={150} height={150}/>
            <p>{data.title}</p>
            <h1>{data.price}</h1>
            <button onClick={handleIncrement}>+</button>
           <span>{count}</span>
            <button onClick={handleDecrement}>-</button>
            <br></br>
           <Link to={`/productlistview/${data.id}`}>
           <button>click to view more</button>
           </Link>
           
          </div>
        </div>
        </>

    )
}