import { Children, createContext, useCallback, useMemo, useReducer, useState } from "react"
import Children1 from "./child"
import Child2 from "./child"

// const Parent1=()=>{
//     const [count,setCount]=useState(5)
//     const [salary,setSalary]=useState(1000)
//     const handleAge=useCallback(()=>{
//         setCount(count+1)
//     },[count])
//     const handleSalary=useCallback(()=>{
//         setSalary(salary+100)
//     },[salary])
//     return(
//         <>
//         <h1>{count}</h1>
//         <h1>{salary}</h1>
//         <Children1 name={handleAge}>age+</Children1>
//         <Children1 name={handleSalary}>salary+</Children1>
//         </>
//     )
// }
// export default Parent1

// ===============================================

// const Parent1=()=>{
//     const [count,setCount]=useState(1)
//     const Value=useMemo(()=>Child(count),[count])
//     const handleCount=()=>{
//         setCount(count+1)
//     }

//     return(
//         <>
//         <h1>factorial {count} is {Value}</h1>
//         <button onClick={handleCount}>increment </button>
        
//         </>
//     )
// }
// export default Parent1

// const Child=(n)=>{
//     var a=1
//     for(var i=n;i>=1;i--){
//         a=a*i
//     }
//  return a
// }
 // ========================================================
// export const Usercontext=createContext() 

// const Parent1=()=>{
//    const hello="hii this is sowmya"
//     return(
        
//         <Usercontext.Provider value={hello}>1qa  az
//             <Child2/>

//         </Usercontext.Provider>
        
//     )
// }
// export default Parent1
// =======================================

const ReducerFunction=(state,action)=>{
    switch(action.type){
        case "INCERMENT_COUNT":
        return {...state,count:state.count+1}
        case "DECREMENT_COUNT":
            return {...state,count:state.count-1}
            default :
            return state
    }

}

const intialValue={
    count:1
}

const Parent1=()=>{
    const[currentValue,dispatchFunction]=useReducer(ReducerFunction,intialValue)
    
    const handleIncrement=()=>{
        dispatchFunction({
            type:"INCERMENT_COUNT"
        })

        
    }
    const handleDecrement=()=>{
        dispatchFunction({
            type:"DECREMENT_COUNT"
        })
    }

    return(
        <>
        <button onClick={handleIncrement}>increment count</button>
        <h1>{currentValue.count}</h1>
        <button onClick={handleDecrement}>decrement count</button>
        </>
    )
}
export default Parent1
