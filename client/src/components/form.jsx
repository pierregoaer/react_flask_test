import React, {useState, useEffect} from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleChange(event) {
        const target = event.target;
        const {name, value} = target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            console.log("Fields are empty.")
            return
        }
        const dataJSON = JSON.stringify(formData);

        fetch('http://127.0.0.1:5000/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJSON,
        }).then(response => console.log(response.status));
    }

    return (
        <div className="contact--form--container">
            <form className="contact--form">
                <input type="text" placeholder="Name" onChange={handleChange} name="name" required />
                <input type="text" placeholder="Email" onChange={handleChange} name="email" required/>
                <input type="text" placeholder="Message" onChange={handleChange} name="message" required/>
                <button type="submit" onClick={handleSubmit}>
                    Send
                </button>
            </form>
        </div>
    );
}
