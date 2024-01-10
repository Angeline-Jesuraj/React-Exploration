
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from './postAction';

const SagaEg = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
console.log("check",posts,loading,error)
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SagaEg;
