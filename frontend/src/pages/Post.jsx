import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <body>
            <div className="container">
                <Link to="/">Home</Link>
                <div className="post">
                    <h2 text="${post.title}">Title</h2>
                    <h5 text="'Created at ' + ${post.createdAt}">Created At</h5>
                    <h5 text="'Updated at ' + ${post.updatedAt}">Updated At</h5>
                    <p text="${post.body}">body text</p>
                </div>
                <ul authorize="isAuthenticated()">
                    <li><Link to="/posts/ + ${post.id} + '/edit'}">Edit</Link></li>
                    <li><Link to="/posts/ + ${post.id} + '/delete'}">Delete</Link></li>
                </ul>
            </div>
        </body>
    );
};
export default Post;