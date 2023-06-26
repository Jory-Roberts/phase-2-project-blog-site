import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DeletePost = ({ posts, onDeletePost }) => {
  const history = useHistory();
  const API = process.env.REACT_APP_API_URL;

  const [selectedPostId, setSelectedPostId] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPostById = async (postId) => {
    try {
      const response = await fetch(`${API}/${postId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const postData = await response.json();
      setSelectedPost(postData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedPostId) {
      fetchPostById(selectedPostId);
    }
  }, [selectedPostId]);

  const handleDeletePost = async () => {
    try {
      const response = await fetch(`${API}/${selectedPostId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        onDeletePost(selectedPostId);
        history.push('/');
      } else {
        console.log('Failed to delete post');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectPost = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <main className='EditPost'>
      <div>
        <label htmlFor='post-select'>Select a Post:</label>
        <select
          id='post-select'
          value={selectedPostId}
          onChange={(e) => handleSelectPost(e.target.value)}
        >
          <option value=''>-- Select Post --</option>
          {posts.map((post) => (
            <option
              key={uuidv4()}
              value={post.id}
            >
              {post.title}
            </option>
          ))}
        </select>
      </div>
      {selectedPost && (
        <article className='post'>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.datetime}</p>
          <p>{selectedPost.body}</p>
          <button onClick={handleDeletePost}>Delete</button>
        </article>
      )}
    </main>
  );
};

export default DeletePost;

// import { useParams, useHistory } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const DeletePost = ({ onDeletePost }) => {
//   const { id } = useParams();
//   const history = useHistory();
//   const API = process.env.REACT_APP_API_URL;

//   const [selectedPost, setSelectedPost] = useState(null);

//   const fetchPostById = async (id) => {
//     try {
//       const response = await fetch(`${API}/${id}`);
//       console.log(id);
//       if (!response.ok) {
//         throw new Error('Failed to fetch post');
//       }
//       const postData = await response.json();
//       setSelectedPost(postData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPostById(id);
//   }, [id]);

//   const handleDeletePost = async () => {
//     try {
//       const response = await fetch(`${API}/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         onDeletePost(id);
//         history.push('/');
//       } else {
//         console.log('Failed to delete post');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!selectedPost) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <main className='EditPost'>
//       <article className='post'>
//         <h2>{selectedPost.title}</h2>
//         <p>{selectedPost.datetime}</p>
//         <p>{selectedPost.body}</p>
//         <button onClick={handleDeletePost}>Delete</button>
//       </article>
//     </main>
//   );
// };

// export default DeletePost;

/*

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
