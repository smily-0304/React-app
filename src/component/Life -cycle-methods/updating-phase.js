import { Component } from "react";





class Update extends Component{
    constructor(){
        super()
        this.state={
            counter:1,
            color:"red",
            singlepost:{}
        }
    }
    handleClick=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    static getDerivedStateFromProps(props){
        return{color:props.favcolor}

    }
    shouldComponentUpdate(){
        return true
    }
    componentDidUpdate(){
        document.title=`count${this.state.counter}`

        fetch(`https://fakestoreapi.com/carts/${this.state.counter}`)
        .then(response=>response.json())
        .then(response=>{
        console.log(response);
        this.setState({
            singlepost:response
        })

        })
    }

    getSnapshotBeforeUpdate(props,state){
        console.log(state);
        return null
    }
    render(){
        return(
            <>
            <h1>update phase</h1>
            <h2 style={{color:this.state.color}}>{this.state.counter}</h2>
            <button onClick={this.handleClick}>increment</button>
            {
               <h2>{this.state.singlepost?.date}</h2> 
            }
            </>
        )
    }
}
export default Update

// whenever a state or props changes Component will get re-excuted or re-render to show the updated data