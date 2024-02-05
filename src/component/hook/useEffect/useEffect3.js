import { useEffect } from "react"


const UseEffect3=()=>{

    useEffect(()=>{

        AddEvent()
        return()=>{
            RemoveEvent()
        }
    },[])
    const AddEvent=()=>{
        document.addEventListener("mousemove",mouseCapture)
    }
    const RemoveEvent=()=>{
        document.removeEventListener("mousemove",mouseCapture)

    }

  
    const mouseCapture=(event)=>{
        console.log(event.clientX,"Xposition ");
        console.log(event.clientY,"Yposition ");

    }
    return(
        <>
        <h5>useeffect 3</h5>
        </>
    )
}
export default UseEffect3