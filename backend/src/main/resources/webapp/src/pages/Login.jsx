import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <body>
            <div className="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <Link to="/">Home</Link>
                <h2>Login</h2>
                <form action="/login"
                    method="POST">
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="text" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" placeholder="Password" />
                    </div>
                    <button type="submit">Login!</button>
                </form>
            </div>

        </body>
    );
};
export default Login;