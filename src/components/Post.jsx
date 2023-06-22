import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, datetime, body, id } = post;

  return (
    <article className='post'>
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p className='postdate'>{datetime}</p>
      <p className='postbody'>{body}</p>
    </article>
  );
};
export default Post;
