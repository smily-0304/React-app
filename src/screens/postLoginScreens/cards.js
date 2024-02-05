import { Link } from "react-router-dom"


const CardStyle=(props)=>{
    return(
        <>
        <div className="card" style={{width:"350px"}}>
    <img className="card-img-top" src={props.image}  alt="Card image" style={{width:"70%"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <h5 className="card-title">Price : {props.price}</h5>
    
      
     <Link to={`/products/${props.id}`}>
        <button>see more</button>
     
     </Link>
 
    </div>
  </div>
        </>
    )
}
export default CardStyle