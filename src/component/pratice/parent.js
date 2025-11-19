


// const ParentCom=()=>{
//     const arr=[1,2,3]
//  return(
//     <>
//     <ChildCom numbers={arr}/>

//     </>
//  )
// }
// export default ParentCom

import React, {  useMemo, useState,useCallback } from "react";
import CustomButton from "./child"


const ProfileUser=()=>{
    const [Age,setAge]=useState(10);
    const [salary,setSalary]=useState(1000)

    const handleAge=useCallback(()=>{
        setAge(Age+10)
    },[Age])
    const handleSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    return(
        <>
        <h1>Age{Age}</h1>
        <h1>salary{salary}</h1>

        <CustomButton onClick={handleAge}>
             increment Age
        </CustomButton>

        <CustomButton onClick={handleSalary}>
             increment salary
        </CustomButton>
        </>
    )
}
export default ProfileUser

// const  Hello=()=>{
//    const[count,setCount]=useState(5)
//    const Expensive=useMemo(()=>Child(count),[count])
//   const handleincrement=()=>{
//     setCount(count+1)
//   }
  
   
//    return(
//       <>
//       <h1>count {count} is {Expensive} </h1>
//       <button onClick={handleincrement}>+</button>
     
      
//       </>
//    )
// }
// export default Hello

// const Child=(n)=>{
//  var  ans=1
//    for(var i=n;i>=1;i--){
//      ans= ans*i
//    }
//    return ans
   
// }

//  import React, { createContext } from "react";
// import { ComponentA } from "./child";



// export const UserContext = createContext();

//  const Parent = () => {
//   const hello = "Hello from Context";

//   return (
//     <UserContext.Provider value={hello}>
//       <ComponentA/>
//     </UserContext.Provider>
//   );
// };
// export default Parent