

import ProfileCard from "./card"

const BasicExample=()=> {
 const members=[
  {
    name:"smily",
    role:"developer",
    color:"blue"
  },
  {
    name:"sowmya",
    role:"developer",
    color:"black"
  },
  {
    name:"harish",
    role:"developer",
    color:"blue"
  }
 ]

  return (
   <>
   <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      
     <ProfileCard profile={members[0]} />
    </div>
    <div className="col-sm-4">
     <ProfileCard profile={members[1]} />
    </div>
    <div className="col-sm-4">
     <ProfileCard profile={members[2]} />
    </div>
  </div>
</div>
   </>
  );
}

export default BasicExample;