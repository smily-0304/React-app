// import { useState } from "react"

// const Control=()=>{
//     const[name,setName]=useState("")
//     const[errorName,setErrorName]=useState("")
//     const[password,setPassword]=useState("")
//     const[errorPassword,setErrorPassword]=useState("")
//     const handleName=(e)=>{
//         setName(e.target.value)
//         if(e.target.value.length>10){
//             setErrorName("enter below 10 charater")
//         }else{
//             setErrorName("")
//         }
//     }
//     const handlePass=(e)=>{
//       const result=e.target.value
//       setPassword(result)
//       console.log(result)
//       if(result.length>8){
//         setErrorPassword("enter below 8 chara")
//       }else{
//         setErrorPassword("")
//       }

//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         const detalis={
//             name,
//             password
//         }
//         console.log(detalis)

//     }
//     return(
//         <>
//         <form>
//             <div>
//                 <label className="username"> Username:</label>
//                 <input type="text" className="username1" placeholder="username" value={name} onChange={handleName}></input>
//                 {
//                     errorName
//                     ?
//                     <h4 style={{color:"red"}}>{errorName}</h4>
//                     :
//                     null
//                 }
//                 <label className="usernamea"> password:</label>
//                 <input type="password" className="username2" placeholder="password" value={password} onChange={handlePass} ></input>
//                 {
//                     errorPassword
//                     ?
//                     <h6 style={{color:"red"}}>{errorPassword}</h6>
//                     :
//                     null
//                 }
//                 <button onClick={handleSubmit}>submit</button>
//             </div>
//         </form>
//         </>
//     )
// }
// export default Control

