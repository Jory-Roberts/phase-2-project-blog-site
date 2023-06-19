import Post from './Post';

const Feed = ({ posts }) => {
  const postsMap = posts.map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
      />
    );
  });
  return <>{postsMap}</>;
};
export default Feed;
