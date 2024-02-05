import React from 'react';
import { useState } from 'react';

export const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        textAreaName: '',

    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validateError = {}
        if (!formData.firstName) {
            validateError.firstName = "firstname is required";
        }

        if (!formData.lastName) {
            validateError.lastName = "lastname is required";
        }

        if (!formData.email) {                                  //<====***
            validateError.email = "email is required";          //<====***
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {       //<====***
            validateError.email = "email is not valid";         //<====***vvv
        }

        // if (!formData.password.trim()) {                         
        //     validateError.password = "password is required";          
        // } else if (formData.password.length < 6) {       
        //     validateError.password = "password should be at least 6 char";         
        // }

        // if (formData.confirmPassword !== formData.password) {
        //     validateError.confirmPassword = "password not matched";
        // }

        setError(validateError);

        if (Object.keys(validateError).length === 0) {
            alert("Your Message is Sent")
        }

        if (!formData.textAreaName) {
            validateError.textAreaName = "your message is required";
        }
    }

  return (
    <div>
        <div className="contactLabel">
            <h1>Say Hi!</h1>
            <div className="contactH3">
                <h3>
                    Any questions or remarks? Just write me a messaage!
                </h3>
            </div>
        </div>

        <div className="boxContainer">
            <form name="form" onSubmit={handleSubmit} className="formGroup">
                <div className="formName">
                    <div>
                        <label>First Name</label>
                        <input 
                            text="text"
                            name="firstName"
                            placeholder="eg. Lucas"
                            autoComplete="none"
                            onChange={handleChange}
                        />
                            {error.firstName && <span>{error.firstName}</span>} 
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input
                            text="text"
                            name="lastName"
                            placeholder="eg. Jones"
                            autoComplete="none"
                            onChange={handleChange}
                        />
                            {error.lastName && <span>{error.lastName}</span>} 
                    </div>
                </div>

                <div className="email">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="eg. lucas@email.com"
                        autoComplete="off"
                        onChange={handleChange}
                    />
                        {error.email && <span>{error.email}</span>} 
                </div>

                <div className="textArea">
                    <label>Your Message</label>
                    <textarea  onChange={handleChange} name="textAreaName" placeholder="Please Enter Your Message"></textarea>
                    {error.textAreaName && <span>{error.textAreaName}</span>}
                </div>

                <div className="formBtn">
                    <button type="submit">SEND MESSAGE</button>
                </div>
            </form>

            <div className="insideBoxContainer">
                <h1>Contact Information</h1>
                <span>
                    Fill up the form and i will get back to you within 6:00 to 22:30 hours.
                </span>
                <div className="contactIconContainer">
                    <a href="tel:+959795599433"><i className="fa-solid fa-phone"></i> <span>+959795599433</span></a>
                    <a href="mailto:@shane4484@gmail.com"><i className="fa-solid fa-envelope"></i> <span>shane4484@gmail.com</span></a>
                    <a href="https://www.facebook.com/shanekoko.shanekoko.1"><i className="fa-brands fa-facebook"></i> <span>Facebook</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}
