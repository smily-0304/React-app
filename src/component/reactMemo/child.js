import React from "react";




const ReactMemoChild =()=>{
    console.log("child re-render");
    return(
        <>
        <h5>good morning</h5>
        </>
    )
}
export default React.memo(ReactMemoChild)