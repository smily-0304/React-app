import { useContext } from "react"
import NavBar from "../../component/navBar/navBar"
import { DataShare } from "../../navigationStack/navigation"
import ReactMemoParent from "../../component/reactMemo/parent"
import UseMemoParent from "../../component/hook/useMemo/parentUseMemo"


const SettingScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <NavBar/>
        {/* <div style={{height:100,width:100,border:"5px solid black", borderRadius:"50%",backgroundColor:darkTheme?"bisque":"black"}}>
             </div> */}

        {/* <ReactMemoParent/> */}
        <UseMemoParent/>
        <h3>hii this is setting screen</h3>
        </>
    )
}
export default SettingScreen