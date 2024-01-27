import { useRef, useState } from "react"




const UnControll =()=>{

    const emailRef=useRef()
    const passwordRef=useRef()
    const[error,seterror]=useState("")



    const handleSubmit =(event)=>{
        event.preventDefault()

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        if(passwordRef.current.value.length<3){
            alert("please enter more then 3 characters")
        }else{
           
            const userInfo={
                username:emailRef.current.value, 
                password:passwordRef.current.value
            }
           
            hitserver(userInfo)

 
        }

    }


    const hitserver =(data)=>{

        fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{
    if(res.message){
        alert(res.message)
        seterror(res.message)

    }else{
        alert("successfull login")
        seterror("")
    }

})
.catch(err=>console.log(err))
  }
    return(
        <>


     <form  onSubmit={handleSubmit}>
         <div className="mb-3 mt-3">
           <label  className="form-label">Email:</label>
          <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" ref={emailRef}/>
         </div>
         <div className="mb-3">
          <label  className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passwordRef}/>
         </div>
         <div className="form-check mb-3">
         {/* <label className="form-check-label">
         <input className="form-check-input" type="checkbox" name="remember"/> Remember me
         </label> */}
         </div>
         {
            error ?
            <h2>{error}</h2>
            :
            null

         }
         <button type="submit" className="btn btn-primary">Submit</button>
     </form>
         





        </>
    )
}
export default UnControll