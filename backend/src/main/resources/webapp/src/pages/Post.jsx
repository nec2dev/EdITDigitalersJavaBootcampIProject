import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <body>
            <div class="container">
                <Link th:to="@{/}">Home</Link>
                <div class="post">
                    <h2 th:text="${post.title}">Title</h2>
                    <h5 th:text="'Created at ' + ${post.createdAt}">Created At</h5>
                    <h5 th:text="'Updated at ' + ${post.updatedAt}">Updated At</h5>
                    <p th:text="${post.body}">body text</p>
                </div>
                <ul sec:authorize="isAuthenticated()">
                    <li><Link th:to="@{'/posts/' + ${post.id} + '/edit'}">Edit</Link></li>
                    <li><Link th:to="@{'/posts/' + ${post.id} + '/delete'}">Delete</Link></li>
                </ul>
            </div>
        </body>
    );
};
export default Post;