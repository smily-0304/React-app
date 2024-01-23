


function ApiCall(){
   
    const fetchdate=()=>{

        try{
            fetch("https://fakestoreapi.com/products")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(err=>console.log(err))

         }catch(err){
            console.log(err);
            alert("something went wrong")
         }finally{
            console.log("stop loading");
         }

         
        

    }
    return(
        <>
        <h2>Api call</h2>
        <button onClick={fetchdate}>click me</button>
        </>
    )
}
export default ApiCall