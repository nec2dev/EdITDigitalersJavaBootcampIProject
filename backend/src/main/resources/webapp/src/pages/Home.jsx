import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <body>
            <div class="container">
                <h1>Spring Boot Blog Application</h1>
                <hr />
                <ul>
                    <li><Link th:to="@{/posts/new}">New Post</Link></li>
                </ul>
                <div class="posts-container">
                    <div class="post" th:each="post : ${posts}">
                        <h2><Link th:to="@{'/posts/' + ${post.id}}" th:text="${post.title}">Title</Link></h2>
                        <h5 th:text="'Written by ' + ${post.account.firstName}">Account First Name</h5>
                        <h5 th:text="'Published at ' + ${post.createdAt}">Created At</h5>
                        <h5 th:text="'Updated at ' + ${post.updatedAt}">Updated At</h5>
                        <p th:text="${post.body}">body text</p>
                    </div>
                </div>
                <hr />
                <ul sec:authorize="!isAuthenticated()">
                    <li><Link th:to="@{/register}">Register</Link></li>
                    <li><Link th:to="@{/login}">Login</Link></li>
                </ul>
                <div sec:authorize="isAuthenticated()">
                    <form th:action="@{/logout}"
                        method="POST">
                        <div>
                            <label>Hi, <span sec:authentication="name">Username</span></label>
                        </div>
                        <button type="submit">Logout</button>
                    </form>
                </div>
            </div>
        </body>
    );
};
export default Home;