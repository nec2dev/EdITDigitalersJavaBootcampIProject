import React from 'react'
import { Link } from 'react-router-dom'

const PostEdit = () => {
    return (
        <body>
            <div class="container">
                <Link th:to="@{/}">Home</Link>
                <form action="#"
                    th:action="@{'/posts/{id}'(id=${post.id})}"
                    th:object="${post}"
                    method="post">
                    <input type="hidden" th:field="*{account}" />
                    <input type="hidden" th:field="*{createdAt}" />
                    <h2>Update Post</h2>
                    <div>
                        <label for="new-post-title">Title</label>
                        <input id="new-post-title" type="text" th:field="*{title}" placeholder="Title" />
                    </div>
                    <div>
                        <label for="new-post-body">Body</label>
                        <textarea id="new-post-body" th:field="*{body}"></textarea>
                    </div>
                    <button type="submit">Update Post</button>
                </form>
            </div>
        </body>
    );
};
export default PostEdit;