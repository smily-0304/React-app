import { Component } from "react";
import ChildButton from "./child";


class Counter extends Component{

      constructor(){
        super()
         this.state={
            count:0

         }
      }

      handleIncrement=(data)=>{
        // setState oka  current state ni change cheyali antey
        this.setState(
            {
                count:this.state.count+data 
            }
        )
      }

    render(){
       return(
        <>
          <h3>counter</h3>
          <h3>{this.state.count}</h3>
          <ChildButton handleIncrementmethod={this.handleIncrement} />
        </>

       ) 
    }
}
export default Counter

// constructor :it os a method used to initalize the state and binding the method