

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

        {members.map((details)=><ProfileCard profile={details} key={details.id }/>)}
      
        </>
        
    )
   
}

export default MapMethod;


// mapmethod :everytime we use  map method we should use key prop
// keyprop an enables the identity for each object or value  which increase the performace while rendering the list