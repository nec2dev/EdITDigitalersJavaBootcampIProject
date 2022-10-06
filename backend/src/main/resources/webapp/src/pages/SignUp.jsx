import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <body>
            <div class="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <Link th:to="@{/}">Home</Link>
                <h2>Register New Account</h2>
                <form action="#"
                    th:action="@{/register}"
                    th:object="${account}"
                    method="POST">
                    <div>
                        <label for="firstname">First Name</label>
                        <input id="firstname" type="text" th:field="*{firstName}" placeholder="First Name" />
                    </div>
                    <div>
                        <label for="lastname">Last Name</label>
                        <input id="lastname" type="text" th:field="*{lastName}" placeholder="Last Name" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="text" th:field="*{email}" placeholder="Email" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input id="password" type="password" th:field="*{password}" placeholder="Password" />
                    </div>
                    <button type="submit">Register!</button>
                </form>
            </div>
        </body>
    );
};
export default SignUp;