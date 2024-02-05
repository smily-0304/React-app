
import { useReducer, useState } from "react"


const reducerFunction=(state,action)=>{
    // console.log(state);
    // console.log(action);
// state manipulation
switch(action.type){
    case "INCREMENT_ACTION":
       return {...state,age:state.age+1}
       case "DECREMENT_ACTION":
        return {...state,age:state.age-1}
        case "ADD_TODO":
            return{...state,todos:[...state.todos,action.next]}
       case "DELETE_TODO":
                const updatedTodos = state.todos.filter(
                  (todos, index) => index !== action.index
                );
                return { ...state, todos: updatedTodos };
       default:
        return state
}


}

const initialState={
    age:20,
    name:"hello" ,
    todos:[]
}

const UseReduceExample=()=>{
const[currentState,dispatchFunction]=useReducer(reducerFunction,initialState)
const[value,setValue]=useState("")
// console.log(currentState);

    const increment =()=>{
        // to manipulate the current state we use dispatch function
        dispatchFunction(
            {
                // capital because it perform action and type is key incre..is value
                type : "INCREMENT_ACTION"
            }
        )
       

    }
    const decrement=()=>{
        dispatchFunction(
            {
                // capital because it perform action and type is key incre..is value
                type : "DECREMENT_ACTION"
            }
        )

    }
    const onChangeHandler=(event)=>{
        setValue(event.target.value)

    }

    const addTodo =()=>{
        dispatchFunction(
            {
                type:"ADD_TODO",
                next:value
            }
        )
    }

    const deleteTodo = (index) => {
        dispatchFunction({
          type: "DELETE_TODO",
          index,
        });
      };
    return(
        <>
        <h2>i am use Reduce example</h2>
        {/* <h3>{currentState.name}</h3> */}

        <button onClick={increment}>+</button>
        <span>{currentState.age}</span>
        <button onClick={decrement}>-</button>
        <input 
        value={value}
        onChange={onChangeHandler}
            />
        <button onClick={addTodo}>Add Todo</button>
        {
            currentState.todos.map((value,index)=><h5 key={index}>{value}</h5>)
        }
         <button onClick={() => deleteTodo()}>Delete</button>
        </>
    )
}
export default UseReduceExample