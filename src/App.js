// function App(){
//   return (
//    <div>
//   <h2>List</h2>
//     <ol>
//       <li>telugu</li>
//       <li>maths</li>
//       <li>social</li>

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

import Like from "./component/list/list"
import Order from "./component/order list/order list"
import Table from "./component/table/table"

function App(){
  return(
    <div>


  
      <Like/>
     <Order/>
     <Table/>
    </div>
  )
}
export default App