// function App(){
//   return (
//    <div>
//   <h2>List</h2>
//     <ol>
//       <li>telugu</li>
//       <li>maths</li>
//       <li>social</li>

import Buttoncomponent from "./component/button/button-component"
import ModuleStyles from "./component/module-style"
import Like from "./component/list/list"
import Order from "./component/order list/order list"
import Table from "./component/table/table"
import { All } from "./component/list of all/all"
import Buttoncomponent1 from "./component/button/button-component"
import ApiCall from "./component/exception handling/api call"
// bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./component/bootstrap/first-comonent"
import MapMethod from './component/bootstrap/mapMethod';
import  ParentComponent from "./component/props/parent"
import Counter from "./component/counter/counter"
import Mounting from "./component/Life -cycle-methods/mounting-phase"
import Update from "./component/Life -cycle-methods/updating-phase"
import Unmounting from "./component/Life -cycle-methods/unmounting-phase"
import UseStateEx from "./component/hook/usestate/usestateEx1"
import UseStateEx2 from "./component/hook/usestate/usestateEx2"
import UseStateEx3 from "./component/hook/usestate/usestateEx3"
import UnControll from "./component/forms/uncontrolled"
import Controlled from "./component/forms/controlled"
import ButtonCircles from "./component/hook/usestate/circleExample"
import Registration from "./component/forms/registration"

//     </ol>
//     <h2>Table</h2>
//     <table>
//       <tr>
//         <th>sl.no</th>
//         <th>name</th>
//         <th>number</th>
//       </tr>
//       <tr>
//         <td>1</td>
//         <td>charan</td>
//         <td>54965164516465</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>tom</td>
//         <td>64984616984654984</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>nithin</td>
//         <td>64984616984654984</td>
//       </tr>
//     </table>
//     <h2>Forms</h2>
//     <form>
//     <input type="text" id="loginUsername"placeholder="Username" required></input><br></br><br></br>
//         <input type="password" id="loginPassword" placeholder="Password" required></input><br></br><br></br>
//         <button type="button" onclick="login()">Login</button>
//     </form>
//     </div>
//   )
// }
// export default App;
 
// day 7/1/24


// function App(){
//   return(
//     <div>


  
//       <Like/>
//      <Order/>
//      <Table/>
//     </div>
//   )
// }
// export default App

// day 8/1/24


// function App(){
//   return(
//     <div>
//       <All/>
//     </div>
//   )
// }
// export default App

// day 9/1/2024


// function App(){
//   return(
//     <div>
//       <Buttoncomponent1></Buttoncomponent1>
    
//     </div>
//   )
// }
// export default App

 // day 10/1/24


// function App(){
//   return(
//     <>
//     <ApiCall/>
//     </>
//   )
// }
// export default App

//  day 11/1/24

// external styling

// function App(){
//   return(
//     <>
//    <ModuleStyles/>
//     </>
//   )
// }
// export default App 

// day 12/1/24

// bootstrap styling
// function App(){
//   return(
//     <>
//    {/* <BasicExample/> */}
//    <MapMethod/>
//     </>
//   )
// }

// export default App

// day 13/1/24
// props two types


// function App(){
//   return(
//     <>
//     < ParentComponent/>
//     </>
//   )
// }
// export default App

// day 17/1/24

// function App(){
//   return(
//     <>
//    {/* <BasicExample/> */}
//    {/* <MapMethod/> */}
//    {/* constructor method in state */}
//    <Counter/>
//     </>
//   )
// }
// export default App

// day 19/1/24


// function App(){
//   const greenColor="green"
//   return(
//     <>
//     <Mounting color={greenColor}/>
//     </>
//   )
// }
// export default App

// day 20/1/24 updating and unmounting phase

// function App(){
 
//   return(
//     <>
//     {/* <Update favcolor="green"/> */}
//     <Unmounting/>
//     </>
//   )
// }
// export default App
// day 22/1/24 hooks==>usestate example

// function App(){
 
//   return(
//     <>
//      {/* <UseStateEx/> */}
//      <UseStateEx2/>
//     </>
//   )
// }
// export default App

// day 23/1/24 usestate example 3 and uncontroll validation
// function App(){
 
//   return(
//     <>
//    {/* <UseStateEx3/> */}
//    <UnControll/>
//     </>
//   )
// }
// export default App

// day 24/1/24 controlled forms and circle task

function App(){
 
  return(
    <>
    {/* <Controlled/> */}
    {/* <ButtonCircles/> */}
    <Registration/>
    </>
  )
}
export default App