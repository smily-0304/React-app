

import Button from "./button"

const ParentComponent =()=>{
    return(
        <>
        {/* general prop */}
        <h1>hello</h1>
        <Button>
            smily
        </Button>
        {/* children prop */}
        <Receiver>
            <h1>i am the children jsx</h1>
            <h1>i am the children jsx </h1>
        </Receiver>
        </>
        
    )
}
export default ParentComponent


const Receiver =({children})=>{
    return(
    children
    )
}