

import reactimage from "./profile.jpg"

const ProfileCard =(props)=>{
    console.log(props);
    return(
        <>
        <div className="card" style={{width:200}} >
    <img className="card-img-top" src={reactimage} alt="Card image" style={{width:"100%"}}></img>
    <div className="card-body">
      <h4 className="card-title" style={{color:props.profile.color}}>{props.profile.name}</h4>
      <p className="card-text">{props.profile.role}</p>
     <button className="cart-button"style={{backgroundColor:"lightblue"}}>See Profile</button>
    </div>
    </div>
        </>

    )
}
export default ProfileCard;