import React, { useState } from "react"





const UseStateEx2 =()=>{
    const[current,setcurrent]=useState([
        {
            name:"smily",
            age:100,
            id:1
        },{
            name:"sowmya",
            age:200,
            id:2
        }

    ])
    const incrementSalary=(data)=>{
     console.log(data);
    }
    const decrementSalary=(data)=>{
        console.log(data);

    }

    return(
        <>
        {
            current.map(value=><React.Fragment key={value.id}>
            <h2>{value.name}</h2>
            <h2>{value.age}</h2>
            <button onClick={()=>incrementSalary(value)}>Increment  Salary</button>
            <button onClick={()=>decrementSalary(value)}>decrement  Salary</button>

            </React.Fragment>)
        }
        </>
    )
}
export default UseStateEx2