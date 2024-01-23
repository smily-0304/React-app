import { useState } from "react"




const UseStateEx =()=>{

    // counter :
    // display the initial value update the value by clicking the button
   const initialvalue=100
    const[count,setCount]=useState(0)
    const[timer,settimer]=useState(initialvalue)

   const handleincrement=()=>{
       setCount(count+1)
   }

   const handleTimer=()=>{
     

     setInterval(()=>{
       
           

        if(timer==0){
            alert("time up")
        }else{
            settimer(timer=>timer-1)
        }

     },1000)
   }

    return(
        <>
        <h2>usestate example {count}</h2>
        <h2 style={{color:timer>90?"black":"red"} }>timer....{timer}</h2>
        <button onClick={handleincrement}>click to increment</button>
        <button onClick={handleTimer}>click to start exam</button>

        </>
    )
}
export default UseStateEx