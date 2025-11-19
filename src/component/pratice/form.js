import React, { useRef } from "react";

const FormSubmits = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const messageRef = useRef();
    const qualificationRef = useRef(); // Added ref for the select element

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            number: numberRef.current.value,
            qualification: qualificationRef.current.value, // Accessing the selected value from the select element
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

export default FormSubmits;