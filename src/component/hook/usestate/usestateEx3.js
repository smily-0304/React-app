import React, { useState } from "react"





const UseStateEx3 =()=>{

    const initialValue=["apple","banana"]
    const [list,setlist]=useState(initialValue)
    const handleAdd =()=>{
        // set the list items wth new fruit

        const newfruit="mango"
        
        setlist([...list,newfruit])

    }
    return(
       <>
       <h2>hello</h2>
       <button onClick={handleAdd}>click to add new fruit</button>
       <ol>

       {
        list.map(
            (value,index)=><React.Fragment key={index}>
            <li>{value}</li>
            </React.Fragment>
        )
       }
       </ol>
       </> 
    )
}
export default UseStateEx3