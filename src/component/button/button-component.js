// class based component syntax

// import { Component } from "react";


// class Buttoncomponent1 extends Component{
//     render(){
//         return(
//             <button>click me</button>
//         )
//     }
// }
//  export default Buttoncomponent1 



import { Component } from "react";


class Buttoncomponent1 extends Component{
    // object way of creating a states in class based component
    state={
        Subscribetext1:"Subscribe",
        isSubscribe:false,
        subscribetext2:"thanks for subscribe"
    }
    handlesubsribe = ()=>{
        this.setState(
            {
               
                isSubscribe:!this.state.isSubscribe

            },()=>{
                console.log(this.state.isSubscribe)
            }
        )

    }
    render(){
        return(
          <>
            <button onClick={this.handlesubsribe}>{this.state.isSubscribe?this.state.subscribetext2:this.state.Subscribetext1}</button>
         
         {
           this.state.isSubscribe
           ?
           <h2>thanks for subscribing</h2>
           :
           <h2>please subscribe</h2>
         }
          </>

        )
    }
}
 export default Buttoncomponent1 
