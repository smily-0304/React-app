import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"


const NavBar=()=>{

   const shareContext=useContext(DataShare)
   const{name}=shareContext
    const link={
        textDecoration:"none",color:"black"
    }
    const display={
        display:"flex"
    }
    const liststyle={
        margin:35
    }
    return(
        
       <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid" style={display}>
 
      <p className="nav-item" style={liststyle}>
       <Link to="/" style={link}>{name}</Link>
      </p>
     
      <p className="nav-item" style={liststyle}>
      <Link to="/about" style={link}>About</Link>
      </p>
      <p className="nav-item" style={liststyle}>
      <Link to="/product" style={link}>Product</Link> 
      </p>
      <p className="nav-item" style={liststyle}>
      <Link to="/setting" style={link}>Setting</Link> 
      </p>
    
  </div>
</nav>


        
    )
}
export default NavBar