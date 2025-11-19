import React from "react";


const TextComponent=({text})=>{
    console.log(text,"text component re-render");
    return(
        <>
        <h3>{text}</h3>

        </>

    )
}
export default React.memo(TextComponent)