import { Component, PureComponent } from "react";




class Unmounting extends Component{


    constructor(){
        super()
        this.state={
            isVisible:false,
            count:0
        }
    }


    handleVisible=()=>{
        this.setState({
            isVisible:!this.state.isVisible
        })
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <>
            <h2>unmounting phase {this.state.count}</h2>

             <button onClick={this.handleVisible}>click to alter flag</button>
             <button onClick={this.handleIncrement}>click to increase count</button>
            {

               
               
               <Child/>
              


            }

            </>
        )
    }
}
export default Unmounting

class Child extends PureComponent{
    render(){
        return(
            <>
            <h2>i am children</h2>
            <h2>i am visible</h2>
            </>
        )
    }
}