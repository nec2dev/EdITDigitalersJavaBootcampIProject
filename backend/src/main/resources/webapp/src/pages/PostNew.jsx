import React from 'react'
import { Link } from 'react-router-dom'

const PostNew = () => {
    return (
        <body>
            <div class="container">
                <Link th:to="@{/}">Home</Link>
                <form action="#"
                    th:action="@{'/posts/new'}"
                    th:object="${post}"
                    method="post">
                    <input type="hidden" th:field="*{account}" />
                    <input type="hidden" th:field="*{createdAt}" />
                    <h2>Write new Post</h2>
                    <div>
                        <label for="new-post-title">Title</label>
                        <input id="new-post-title" type="text" th:field="*{title}" placeholder="Title" required />
                    </div>
                    <div>
                        <label for="new-post-body">Body</label>
                        <textarea id="new-post-body" th:field="*{body}" required></textarea>
                    </div>
                    <button type="submit">Publish Post</button>
                </form>
            </div>
        </body>
    );
};
export default PostNew;