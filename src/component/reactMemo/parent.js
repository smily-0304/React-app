import { useState } from "react"
import ReactMemoChild from "./child"




const ReactMemoParent =()=>{
    const[count,setcount]=useState(0)
    const handleIncrement=()=>{
        setcount(count+1)

    }
    return(
        <>
        <h2>{count}</h2>
        <button onClick={handleIncrement}>increment</button>
        <ReactMemoChild/>
        </>
    )
}
export default ReactMemoParent