





function ChildButton({handleIncrementmethod}){
    return(
      <>
      <button onClick={()=>handleIncrementmethod(2)}>increment by 1</button>
      </>  
    )
}
export default ChildButton