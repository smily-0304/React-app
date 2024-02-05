import { useEffect, useState } from "react"


const UseEffect2=()=>{
    const[count,setcount]=useState(0)
    useEffect(()=>{
      Updatecount()
    },[count])
    
    const Updatecount=()=>{
       
        document.title=`counter value ${count}`

    }
    const increment=()=>{
        setcount(count+1)
    }
    return(
        <>
        <h2>useeffect 2 {count}</h2>
        <button onClick={increment}>click to update the count</button>
        </>
    )
}
export default UseEffect2