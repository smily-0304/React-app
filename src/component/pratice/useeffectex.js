// import axios from "axios"
// import { useEffect, useState } from "react"

import { useEffect, useReducer, useState } from "react"

// const UseEffect=()=>{
//     const[state,setstate]=useState([])
//     useEffect(()=>{
//         fetchData()

//     },[])
//     const fetchData=()=>{
//         axios.get("https://fakestoreapi.com/products")
//         .then((res)=>{
//             setstate(res.data)
//         })
//         .catch(err=>console.log(err))
//     }
//     return(

//         <>
//         <h2>hii</h2>
//         {
//             state.map((val,index)=>
//              <div key={index}>
// //                 <h3>{Val.id}</h3>
// //             </div>
           
//             )
//         }
//         </>
//     )
// }
// export default UseEffect
// ===================================================================================
// const UseEffect2=()=>{
//     const[state,setstate]=useState(1)
//     useEffect(()=>{
//         Update()

//     },[state])
//     const Update=()=>{
//         document.title=`value ${state}`
//     }
//     const handleIncrement=()=>{
//         setstate(state+1)
//     }
//     return(
//         <>
//         <h2>count..{state}</h2>
//         <button onClick={handleIncrement}>increment</button>
//         </>
//     )
// }
//  export default UseEffect2
 // ==========================================================================================

// const UseEffect3=()=>{
//     useEffect(()=>{
//         AddEvent()
//         return()=>{
//             RemoveEvent()
//         }

//     },[])

//     const AddEvent=()=>{
//         document.addEventListener("mousemove",mouseCapture)
//     }
//     const RemoveEvent=()=>{
//         document.removeEventListener("mousemove",mouseCapture)

//     }
//     const mouseCapture=(event)=>{

//         console.log(event.clientX,"xposition")
//         console.log(event.clientY,"yposition")
//     }
//     return(
//         <>
//         <h3>hiii</h3>
//         </>
//     )
// }
// export default UseEffect3
// =========================================================================
// const ReducerFunction=(state,action)=>{
//     switch(action.type){
//         case "INCREMENT_AGE":
//             return {...state,age:state.age+1}
//             case "DECREMENT_AGE":
//                 return{...state,age:state.age-1}
//                 default :
//                 return state

//     }

// }
// const intialValue={
//     age:20
// }

// const UseReducer=()=>{
//     const[currentValue,dispatchFunction]=useReducer(
//         ReducerFunction,
//         intialValue
//     )
//     const[count,setCount]=useState("")
//     const handleIncrement=()=>{
//         dispatchFunction({
//             type:"INCREMENT_AGE"
//         })

//     }
//     const handleDecrement=()=>{
//         dispatchFunction({
//             type :"DECREMENT_AGE" 
//         })
//     }
//     return(
//         <>
//         <button onClick={handleIncrement}>increm</button>
//         <h3>{currentValue.age}</h3>
//         <button onClick={handleDecrement}>decre</button>
//         </>
//     )
// }
// export default UseReducer
// ===========================================================================

// const UseMemo=()=>{
//     const[count,setCount]=useState(5)
//     const Expensice= UseMemo(()=> Child(count),[count])
//     const increment=()=>{
//         setCount(count+1)

//     }
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={increment}>increment</button>
//        <Expensice/>
//         </>
//     )
// }
// export default UseMemo

// const Child=()=>{
//    for(let i=0;i<100;i++){
//     console.log(i)
//    }
// }