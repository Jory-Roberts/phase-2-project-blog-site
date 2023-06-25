import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const EditPost = () => {
  const { id } = useParams();

  const fetchPostById = async () => {
    const postData = await fetch(`${API}/${API.id}`).then((postData) => postData.json());
    console.log(postData);
  };

  useEffect(() => {
    fetchPostById();
  }, [id]);

  return (
    <article className='post'>
      <h2>Edit Post</h2>
      <p className='postdate'>P1</p>
      <p className='postbody'>P2</p>
    </article>
  );
};
export default EditPost;
