export const All=()=>{
    const a={
        name:"Sidharth Malhotra",
        imgURL:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.newindianexpress.com%2Fuploads%2Fuser%2Fimagelibrary%2F2021%2F1%2F18%2Fw1200X800%2FSidharth_Malhotra_PTI.jpg&tbnid=jXsFnshqT34O8M&vet=12ahUKEwjMq-j4y8-DAxUGQGwGHbk7DWMQMygaegUIARCsAQ..i&imgrefurl=https%3A%2F%2Fwww.newindianexpress.com%2Fentertainment%2Fhindi%2F2022%2Fnov%2F21%2Fim-a-man-whos-trying-to-make-a-plan-sidharth-malhotra-2520646.html&docid=UYryRtRjhf7zUM&w=1200&h=800&q=sidharth%20malhotra&ved=2ahUKEwjMq-j4y8-DAxUGQGwGHbk7DWMQMygaegUIARCsAQ",
        listItems:["actor","Bollyhood","india"],
        heading:["s.no","name","number"],
        row1:[1,"smily","123456789"],
        row2:[2,"sowmya","0984685"],
        label1:"Username",
        label2:"password",
        button:"click me"
    }
   const{name,imgURL,listItems,heading,row1,row2,label1,label2,button}=a
   return(
    <div>
        <h1>{name}</h1>
        <img src="{imgURL}" width="200px" />
        <ul>
            <li>{listItems[0]}</li>
            <li>{listItems[1]}</li>
            <li>{listItems[2]}</li>

        </ul>
        <table>
            <tr>
                <th>{heading[0]}</th>
                <th>{heading[1]}</th>
                <th>{heading[2]}</th>
            </tr>
            <tr>
                <td>{row1[0]}</td>
                <td>{row1[1]}</td>
                <td>{row1[2]}</td>
            </tr>
            <tr>
            <td>{row2[0]}</td> 
            <td>{row2[1]}</td> 
            <td>{row2[2]}</td> 
            </tr>
        </table><br></br>
        <form>
            <label>{label1}</label>
            <input type="text" id="username:" placeholder="username"></input><br></br>
            <label>{label2}</label>
            <input type="password" id="password:" placeholder="password"></input><br></br>
            <button type="button" onClick="login()">{button}</button>
        </form>
        
    
    </div>
   )
}