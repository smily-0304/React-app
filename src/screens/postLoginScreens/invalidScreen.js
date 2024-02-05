

import { useNavigate } from "react-router-dom"
import NavBar from "../../component/navBar/navBar"
// import NavBar from "../component/navBar/navBar"



const InvalidScreen =()=>{
    const navigation=useNavigate()
    const handleNavigate=()=>{
        navigation("/")
    }
    return(
        <>
        <NavBar/>
        <h3>this screen is InvalidScreen</h3>
        <button onClick={handleNavigate}> click to login Page</button>
        </>

    )
}
export default InvalidScreen