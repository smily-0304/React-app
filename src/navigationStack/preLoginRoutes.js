import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/preLoginScreens/loginScreen"
import InvalidScreen from "../screens/postLoginScreens/invalidScreen"


const PreLoginRoute=()=>{
    return(
        <Routes>
            <Route path="/" Component={LoginScreen}/>
            <Route path="*" Component={InvalidScreen}/>
        </Routes>
    )
}
export default PreLoginRoute