

// const ChildCom=({numbers})=>{
    
//     return(
//         <>
//         <ul>
//         {numbers.map((val, index) => (
//           <li key={index}>{val}</li>
//         ))}
//         </ul>

//         </>
//     )
// }
// export default ChildCom

import React from 'react'

function CustomButton({children,onClick}) {
  console.log("children")
  return (
    
    <button onClick={onClick}>{children}</button>
  )
}

export default React.memo(CustomButton)

// import React, { useContext } from "react";
// import { UserContext } from "./parent";



// export const ComponentA = () => {

// const ganesh=useContext(UserContext)
// console.log("hello")

//   return (
//     <>
//     <h1>{ganesh}</h1>
//     </>
//   );
// };