import { useContext } from "react"
import NavBar from "../../component/navBar/navBar"
import { DataShare } from "../../navigationStack/navigation"
import Parent from "../../component/hook/useCallback/parent"
import UseCallbackEx from "../../component/hook/useCallback/parent"
import Footer from "../../component/navBar/footer"


const ProductScreen =(id)=>{
   
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <NavBar/>
        {/* <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div> */}
            <UseCallbackEx/>
        <h3>hii this is product screen</h3>
        <Footer/>
        </>
    )
}
export default ProductScreen