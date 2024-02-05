

import ProfileCard from "./card"


const MapMethod =()=>{ 

    const members=[
        {
          name:"smily",
          id:1,
          role:"developer",
          color:"blue"
        },
        {
          name:"sowmya",
          id:2,
          role:"developer",
          color:"black"
        },
        {
          name:"harish",
          id:3,
          role:"developer",
          color:"blue"
        }
       ]

    return(
        <>

     
        <div class="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4" style={{display:"grid",gridTemplateColumns:"100% 100% 100%", gap:"10px"}}>
    {members.map((details)=><ProfileCard profile={details} key={details.id }/>)}
    </div>
    </div>
    </div>
        </>
      
       
        
    )
   
}

export default MapMethod;


// mapmethod :everytime we use  map method we should use key prop
// keyprop an enables the identity for each object or value  which increase the performace while rendering the list