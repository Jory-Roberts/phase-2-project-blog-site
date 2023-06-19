const Post = ({ post }) => {
  const { title, datetime, body } = post;
  return (
    <article className='post'>
      <h2>{title}</h2>
      <p className='postdate'>{datetime}</p>
      <p className='postbody'>{body}</p>
    </article>
  );
};
export default Post;
