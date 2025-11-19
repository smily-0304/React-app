import { render } from "@testing-library/react"
import { Component } from "react"
import ChildProp from "./child"


class Parent extends Component{
    constructor(){
        super()
        this.state={
            name:"smily"
        }
    }
    render(){
        return(
            <>
           
            <ChildProp smily={this.state.name}/>
            </>
        )
    }
}
export default Parent