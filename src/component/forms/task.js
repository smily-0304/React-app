import React, { useRef } from "react";

const FormSubmit = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const messageRef = useRef();
    const qualificationRef = useRef(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            number: numberRef.current.value,
            qualification: qualificationRef.current.value, 
            message: messageRef.current.value
        };
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        return false; 
    }
   
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset className="form">
                    <p><b>I'M INTERESTED IN THE PROGRAM</b></p>
                    <input type="text" id="full_name" placeholder="Full Name" ref={nameRef} />
                    <br /><br />
                    <input type="email" id="email" placeholder="Email" ref={emailRef} />
                    <br /><br />
                    <input type="number" id="number" placeholder="Mobile Number" ref={numberRef} />
                    <br /><br />
                    <select id="qualification" style={{ width: "180px" }} ref={qualificationRef}>
                        <option value="">Qualification</option>
                        <option value="Btech">Btech</option>
                        <option value="Degree">Degree</option>
                        <option value="pg">PG</option>
                    </select>
                    <br /><br />
                    <input type="text" id="message" placeholder="Message" ref={messageRef} />
                    <br /><br />
                    <button type="submit">SUBMIT</button>
                </fieldset>
            </form>
        </>
    )
}

export default FormSubmit;