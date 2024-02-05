import { BrowserRouter, Route, Routes } from "react-router-dom"

import { createContext, useState } from "react"
import LoginScreen from "../screens/preLoginScreens/loginScreen"
import PostLoginRoute from "./postLoginRoute"
import PreLoginRoute from "./preLoginRoutes"


 export const DataShare =createContext()

const NavigationStack =()=>{
    const[name,setName]=useState("Myntra")
    const[darkTheme,setDarkTheme]=useState(false)
    const[login,setLogin]=useState(false)
   const changeTheme=()=>{
    setDarkTheme(!darkTheme)
   }

   const loginTrue=()=>{
    setLogin(true)
   }
    return(
      <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}>
        {/* value{} la ani datatype but object ayethey key value pair ani and key value same untey oka sri rayachu */}
         <BrowserRouter>
      {
        true
        ?
        <PostLoginRoute/>
        :
        <PreLoginRoute/>

      }
       </BrowserRouter>
      </DataShare.Provider>
    )
}
export default NavigationStack