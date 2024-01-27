import { useState } from "react"




const Controlled=()=>{

    const[userName,setUserName]=useState("")
    const[errorUsename,seterrorUsername]=useState("")
    const [password,setpassword]=useState("")
    const[passwordError,setpasswordError]=useState("")



    const userNamehandler =(event)=>{
       
        setUserName(event.target.value)
        if(event.target.value.length>10){
            seterrorUsername("enter below 10 character")
        }else{
            seterrorUsername("")
        }

    }
    const passwordHandler =(event)=>{
        setpassword(event.target.value)
        console.log(event.target.value)
        const result=validatePassword(event.target.value)
        if(result){
            console.log("password is valid");
            setpasswordError("")
        }else{
            setpasswordError("password is invalid")
       
        }

    }

    const username = "k3llydev";

    function validatePassword(psw)
{
  let msg = true

  switch (true) {
  case  (psw.length < 8 || psw.length > 13):
    msg = false
    break
  case  (!(/[0-9]/.test(psw))):
    msg = false
    break
  case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
    msg = false
    break
  case ( psw.includes(username)):
    msg = false
    break
  }
  return msg
}


  const submitHandler =(event)=>{
     event.preventDefault()

      //  server hit
      const userDetails={
       userName,
       password
      }
       console.log(userDetails,"userDetails");

  }
 


    return(
      <>

     <form  onSubmit={submitHandler}>
         <div className="mb-3 mt-3">
           <label  className="form-label">Username</label>
          <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" value={userName} onChange={userNamehandler}/>
          {
            errorUsename
            ?
            <h3 style={{color:"red"}}>{errorUsename}</h3>
            :
            null

          }
         </div>
         <div className="mb-3">
          <label  className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={passwordHandler} />

          {
            passwordError ?
            <h3 style={{color:"red"}}>{passwordError}</h3>
            :
            null
          }
          
         </div>
         <div className="form-check mb-3">
        
         </div>
        {
            errorUsename || passwordError? null :
            
         <button type="submit" className="btn btn-primary">Submit</button>

        }
     </form>

      </>

    )
}
export default Controlled