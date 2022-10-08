import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <body>
            <div className="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <Link to="/">Home</Link>
                <h2>Register New Account</h2>
                <form action="/signup"
                    object="${account}"
                    method="POST">
                    <div>
                        <label for="firstname">First Name</label>
                        <input id="firstname" type="text" field="*{firstName}" placeholder="First Name" />
                    </div>
                    <div>
                        <label for="lastname">Last Name</label>
                        <input id="lastname" type="text" field="*{lastName}" placeholder="Last Name" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="text" field="*{email}" placeholder="Email" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input id="password" type="password" field="*{password}" placeholder="Password" />
                    </div>
                    <button type="submit">Register!</button>
                </form>
            </div>
        </body>
    );
};
export default SignUp;