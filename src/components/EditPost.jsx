import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const EditPost = ({ posts }) => {
  // const { id } = useParams();

  // const fetchPostById = async () => {
  //   const postData = await fetch(`${API}/${API.id}`).then((postData) => postData.json());
  //   console.log(postData);
  // };

  // useEffect(() => {
  //   fetchPostById();
  // }, [id]);

  const selectedPostToEdit = posts.map((post) => <option key={post.id}>{post.title}</option>);

  return (
    <article className='post'>
      <h2>Edit Post</h2>
      <select>{selectedPostToEdit}</select>
    </article>
  );
};
export default EditPost;
