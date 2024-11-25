import React from 'react'
import axios from 'axios'
import './form.css'


export default function Register() {
    const host = 'http://localhost:4001';

    const submitForm = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${host}/auth/register`, document.querySelector('#registerForm'));
        console.log(JSON.stringify(response.data));
    }

    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={submitForm} id="registerForm">
                <h3>Register</h3>

                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" id="name" name="name" />
                    </div>
                    <div className="col">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Email" id="email" name="email" />
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Phone" id="phone" name="phone" />
                    </div>
                    <div className="col">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" name="password" />
                    </div>
                </div>

                <label htmlFor="profile">Profile</label>
                <input type="file" id="profile" name="profile" accept='image/*' />

                <button type="submit">Log In</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </form>
        </>
    )
}
