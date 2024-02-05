import { useContext } from "react"
import NavBar from "../../component/navBar/navBar"
import { DataShare } from "../../navigationStack/navigation"


const ProductScreen =(id)=>{
   
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <NavBar/>
        <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div>
        <h3>hii this is product screen</h3>
        </>
    )
}
export default ProductScreen