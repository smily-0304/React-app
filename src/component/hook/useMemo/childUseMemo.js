import { useMemo, useState } from "react"



const UseMemoChild=({greeting1})=>{

    const[age,setAge]=useState(5)
     // for greeting in chapital
     const upperCaseMemorizedValue=useMemo( ()=>{
        console.log("lowerToUperCase faunction");
        // expensive Calculation
        // for(let i=0;i<100;i++){
        //     console.log(i);
        // }
        const upperCase=greeting1.toUpperCase()
        return upperCase
    },[greeting1] )

   
    
    const increaseAgeFunction=()=>{
        console.log("increment");
        setAge(age+5)
    }

    return(
        <>
       <h2>{upperCaseMemorizedValue}</h2>
       <h4>current age-{age}</h4>
       <button onClick={increaseAgeFunction}>click + age</button>
        </>
    )
}
export default UseMemoChild