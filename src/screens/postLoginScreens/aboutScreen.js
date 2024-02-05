import { useContext } from "react"
import NavBar from "../../component/navBar/navBar"
import { DataShare } from "../../navigationStack/navigation"
import UseReduceExample from "../../component/hook/useReducer/useReducer"



const AboutScreen =()=>{
    const data=useContext(DataShare)
    const{name,darkTheme}=data
    return(
        <>
        <NavBar/>
        <UseReduceExample/>
        {/* <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div> */}
        <h3>hii this is about screen</h3>
        <h2>shop more in {name}</h2>
        </>
    )
}
export default AboutScreen