import { useParams } from 'react-router-dom';

const PostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);
  const { title, body, datetime } = posts;

  return (
    <article className='PostPage'>
      {post ? (
        <div>
          <h2>{title}</h2>
          <p className='postPageBody'>{body}</p>
          <p className='postPageTime'>{datetime}</p>
        </div>
      ) : (
        <p>Post Not Found</p>
      )}
    </article>
  );
};

export default PostPage;
