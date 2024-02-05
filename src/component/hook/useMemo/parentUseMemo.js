import { useState } from "react"
import UseMemoChild from "./childUseMemo"
import { timeToGreeting } from "../../../utills/dateHelper";




const UseMemoParent=()=>{
    const data=new Date()
    // console.log(data.getDay())
    console.log(data.getHours());


    // const[greeting,setGreeting]=useState("Good Morning")
    // const[greeting,setGreeting]=useState(indexToDay(data.getDay()))
    const[greeting,setGreeting]=useState(timeToGreeting(data.getHours()))

    
    return(
        <>
        <div><UseMemoChild greeting1={greeting}/></div>
        </>
    )
}
export default UseMemoParent