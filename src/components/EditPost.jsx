import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const EditPost = ({ posts }) => {
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;

  const filteredPosts = posts.filter((post) => post.id === id);

  const handleChange = () => {
    filteredPosts.map((post) => (
      <main className='EditPost'>
        <article className='post'>
          <select>
            <option key={post.id}>{post.title}</option>
          </select>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
        </article>
      </main>
    ));
  };

  const fetchPostById = async () => {
    const postData = await fetch(`${API}${API.id}`).then((postData) => postData.json());
    console.log(postData);
  };

  useEffect(() => {
    fetchPostById();
  }, [id]);

  return (
    <>
      {handleChange()}
      <button onClick={(e) => console.log("I'm a button", e.target.value)}>Delete</button>
    </>
  );
};
export default EditPost;
