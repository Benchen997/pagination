import React from "react";
import "../App.css";

function Posts({currentPosts, loading}) {
    if(loading) {
        return <h2>Loading...</h2>
    }
    //console.log(currentPosts);
    return (
        <ul className='list-group'>
            {currentPosts.length > 0 && currentPosts.map(post => (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            ))}
        </ul>
    );
}

export default Posts;