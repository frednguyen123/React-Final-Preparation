import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Posts = () => {
    const { id }  = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            // console.log(response.data);
            setPosts(response.data);
        }
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => <div>{post.title}</div>)}
        </div>
    );
}

export default Posts;
