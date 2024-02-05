
import { useState } from "react"




const Registration=()=>{

    const[userName,setUserName]=useState("")
    const[errorUsename,seterrorUsername]=useState("")
    const [password,setpassword]=useState("")
    const[passwordError,setpasswordError]=useState("")
    const[email,setemail]=useState("")
    const[errorEmail,seterroremail]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const[confirmErrorPassword,setConfirmErrorPassword]=useState("")



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
  case (psw === psw.toLowerCase()) || (psw === psw.toUpperCase()):
    msg = false 
    break
  case ( psw.includes(username)):
    msg = false
    break
    default:
      return msg
  }
 
}

 const ConfirmHandle=(event)=>{

  event.preventDefault();

 let pass = event.target.value

  setConfirmPassword(event.target.value);

  if(password === pass){
    setConfirmErrorPassword(""); 
   console.log("password match");
}else{
  
   setConfirmErrorPassword("Passwords do not match");
   
}
  }


  const emailHandler=(event)=>{
    setemail(event.target.value)
    console.log(event.target.valu);
    const Result= validateEmail(event.target.value)
    if(Result){
      console.log("valid Email");
      seterroremail("")
    }else{
      seterroremail("invalid Email")
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
     .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
   };


  const submitHandler =(event)=>{
     event.preventDefault()
      const userDetails={
       userName,
       password,
       confirmPassword,
       email,
      }
       console.log(userDetails,"userDetails");
  }
 
    return(
      <>

     <form  onSubmit={submitHandler}>
         <div className="mb-3 mt-3">
           <label  className="form-label">Username</label>
          <input type="text" className="form-control" id="email" placeholder="Enter username" name="email" value={userName} onChange={userNamehandler}/>
          {
            errorUsename
            ?
            <h3 style={{color:"red"}}>{errorUsename}</h3>
            :
            null

          }
         </div>
         

         <div className="mb-3">
          <label   className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={passwordHandler} />

          {
            passwordError ?
            <h3 style={{color:"red"}}>{passwordError}</h3>
            :
            null
          }

         </div>
         <div>
         <label  className="form-label">confirm password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter Confirm" name="pswd" value={confirmPassword} onChange={ConfirmHandle} />
          {
            confirmErrorPassword ?
            <h5 style={{color:"red"}}>{confirmErrorPassword}</h5>
            :
            null
          }
         </div>

         <div>
         <label  className="form-label">Email:</label>
          <input type="email" className="form-control" id="pwd" placeholder="Enter email" name="pswd" value={email}  onChange={emailHandler}/>
          {
            errorEmail ?
            <h5 style={{color:"red"}}>{errorEmail}</h5>
            :
            null
          }
         </div><br></br><br></br>
        
         
        {
            errorUsename || passwordError || confirmErrorPassword ||errorEmail ? null :

         <button type="submit" className="btn btn-primary">Submit</button>

        }
     </form>

      </>

    )
}
export default Registration