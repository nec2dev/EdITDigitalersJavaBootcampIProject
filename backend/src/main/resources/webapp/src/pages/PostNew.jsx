import React from 'react'
import { Link } from 'react-router-dom'

const PostNew = () => {
    return (
        <body>
            <div className="container">
                <Link to="/">Home</Link>
                <form 
                    action="'/posts/new'"
                    object="${post}"
                    method="post">
                    <input type="hidden" field="*{account}" />
                    <input type="hidden" field="*{createdAt}" />
                    <h2>Write new Post</h2>
                    <div>
                        <label for="new-post-title">Title</label>
                        <input id="new-post-title" type="text" field="*{title}" placeholder="Title" required />
                    </div>
                    <div>
                        <label for="new-post-body">Body</label>
                        <textarea id="new-post-body" field="*{body}" required></textarea>
                    </div>
                    <button type="submit">Publish Post</button>
                </form>
            </div>
        </body>
    );
};
export default PostNew;