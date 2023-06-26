import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

/*
Need to address problem of state not updating without refresh. Need to correct issue of new blog post being added not displaying when clicking on it to redirect to Delete

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditPost = ({ deletePost }) => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  const API = process.env.REACT_APP_API_URL;

  const [selectedPost, setSelectedPost] = useState([]);

  const fetchPostById = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const postData = await response.json();
      console.log(postData);
      setSelectedPost(postData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostById(id);
  }, [id]);

  const handleDelete = async () => {
    await deletePost(id);
    history.push('/');
  };

  return (
    <main className='EditPost'>
      <article className='post'>
        {selectedPost && (
          <>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.datetime}</p>
            <p>{selectedPost.body}</p>
          </>
        )}
        <button onClick={handleDelete}>Delete</button>
      </article>
    </main>
  );
};
*/

const DeletePost = ({ onDeletePost }) => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  const API = process.env.REACT_APP_API_URL;

  const [selectedPost, setSelectedPost] = useState([]);

  const fetchPostById = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const postData = await response.json();
      console.log(postData);
      setSelectedPost(postData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPostById(id);
  }, [id]);

  const handleDeletePost = async (id) => {
    const response = await fetch(`${API}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      onDeletePost(id);
      history.push('/');
    } else {
      console.log('Failed to delete post');
    }
  };

  return (
    <main className='EditPost'>
      <article className='post'>
        {selectedPost && (
          <>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.datetime}</p>
            <p>{selectedPost.body}</p>
          </>
        )}
        <button onClick={() => handleDeletePost(id)}>Delete</button>
      </article>
    </main>
  );
};

export default DeletePost;
