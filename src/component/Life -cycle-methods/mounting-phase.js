import { Component } from "react";



class Mounting extends Component{

    constructor(){
      
        super()
        this.state={
            message:"good morning",
            color:"red",
            posts:[]
        }
    }
    static getDerviedStateFromProps(props){
      console.log("getdervidedstatefromprpos");
        return {color:props.color}
    }

    componentDidMount(){
    //  dom manipulation
        document.title="smily"
        fetch("https://fakestoreapi.com/carts")
        .then(response=>response.json())
        .then(response=>{
         this.setState(
            {
                posts:response
            }
         )

        })
    }



    render(){
        // console.log(this.state.posts);
        return(
            <>
            <h2 style={{color:this.state.color}}>mounting phase{this.state.message}</h2>

            {
                this.state.posts.length>0
                ?
                <>
               {
                this.state.posts.map((eachpost)=>
                <>
                        <h2>{eachpost.date}</h2>
                        <h2>{eachpost.id}</h2>
                        </>
                        )
                    
            
               }
                </>
                :
               <h2>loading</h2>
                
            }

            </>
        )
    }
}
export default Mounting