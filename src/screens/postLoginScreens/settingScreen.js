import { useContext } from "react"
import NavBar from "../../component/navBar/navBar"
import { DataShare } from "../../navigationStack/navigation"
import ReactMemoParent from "../../component/reactMemo/parent"
import UseMemoParent from "../../component/hook/useMemo/parentUseMemo"
import { useOnline } from "../../component/hook/customHooks/useOnline"
import Footer from "../../component/navBar/footer"



const SettingScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    const [internetstatue]= useOnline()
    return(
        <>
        <NavBar/>
        {
            internetstatue
            ?
            <h1>is online</h1>
            :
            <h2>is offline</h2>
        }
        {/* <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div> */}

        {/* <ReactMemoParent/> */}
        <UseMemoParent/>
        <h3>hii this is setting screen</h3>
      
        <Footer/>
        </>
    )
}
export default SettingScreen