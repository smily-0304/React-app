import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"

import ProductDetails from "../screens/postLoginScreens/productDetails"
import InvalidScreen from "../screens/postLoginScreens/invalidScreen"



const PostLoginRoute=()=>{
    return(
        <Routes>
       <Route path="/" Component={HomeScreen}/>
       <Route path="/product" Component={ProductScreen}/>
       <Route path="/about"  Component={AboutScreen}/>
       <Route path="/setting" Component={SettingScreen}/>
      
       <Route path="/productlistview/:id" Component={ProductDetails}/>
       <Route path="*" Component={InvalidScreen}/>
        </Routes>
    )
}
export default PostLoginRoute