import React from 'react'
import { Link } from 'react-router-dom'

const PostEdit = () => {
    return (
        <body>
            <div className="container">
                <Link to="/">Home</Link>
                <form 
                    action="/posts/{id}'(id=${post.id})"
                    object="${post}"
                    method="post">
                    <input type="hidden" field="*{account}" />
                    <input type="hidden" field="*{createdAt}" />
                    <h2>Update Post</h2>
                    <div>
                        <label for="new-post-title">Title</label>
                        <input id="new-post-title" type="text" field="*{title}" placeholder="Title" />
                    </div>
                    <div>
                        <label for="new-post-body">Body</label>
                        <textarea id="new-post-body" field="*{body}"></textarea>
                    </div>
                    <button type="submit">Update Post</button>
                </form>
            </div>
        </body>
    );
};
export default PostEdit;