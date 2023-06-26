import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditPost = ({ posts, setPosts }) => {
  const { id } = useParams();
  console.log(id);
  const API = process.env.REACT_APP_API_URL;

  const [selectedPost, setSelectedPost] = useState(null);

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

  // const handleUpdatePost = () => {
  //   // Update the post using setPosts
  //   const updatedPosts = posts.map((post) => {
  //     if (post.id === id) {
  //       return { ...post /* updated fields */ };
  //     }
  //     return post;
  //   });

  //   setPosts(updatedPosts);
  // };

  return (
    <main className='EditPost'>
      <article className='post'>
        {selectedPost && (
          <>
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.datetime}</p>
            <p>{selectedPost.body}</p>
          </>
        )}
        <button onClick={() => console.log('Button')}>Delete</button>
      </article>
    </main>
  );
};

export default EditPost;
