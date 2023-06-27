import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const DeletePost = ({ posts, onDeletePost }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState('');

  const API = process.env.REACT_APP_API_URL;
  const history = useHistory();

  const fetchPostsById = async (id) => {
    const response = await fetch(`${API}/${id}`);
    const postData = await response.json();
    setSelectedPost(postData);
    console.log(postData);
  };

  useEffect(() => {
    fetchPostsById(selectedPostId);
  }, [selectedPostId]);

  const handleDeletePost = async () => {
    const deleteResponse = await fetch(`${API}/${selectedPostId}`, {
      method: 'DELETE',
    });

    if (deleteResponse.ok) {
      onDeletePost(selectedPostId);
      console.log('Delete success');
      history.push('/');
    } else {
      console.error('Failed to delete post');
    }
  };

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
  };

  const postsMap = posts.map((post) => {
    return (
      <option
        key={uuidv4()}
        value={post.id}
      >
        {post.title}
      </option>
    );
  });

  return (
    <main className='DeletePost'>
      <div>
        <label htmlFor='post-select'>Select a Post:</label>
        <select
          id='post-select'
          value={selectedPostId}
          onChange={(e) => handleSelectPost(e.target.value)}
        >
          <option>---Select Post---</option>
          {postsMap}
        </select>
      </div>
      {selectedPost && (
        <article className='post'>
          <h2>Title: {selectedPost.title}</h2>
          <p className='postdate'>Date: {selectedPost.datetime}</p>
          <p className='postbody'>Body: {selectedPost.body}</p>
          <button onClick={() => handleDeletePost(selectedPost.id)}>Delete Post</button>
        </article>
      )}
    </main>
  );
};
export default DeletePost;
