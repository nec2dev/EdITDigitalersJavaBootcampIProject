const Login = () => {
    return (
        <body>
            <div class="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <a th:href="@{/}">Home</a>
                <h2>Login</h2>
                <form action="#"
                    th:action="@{/login}"
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