import Post from './Post';
import { v4 as uuidv4 } from 'uuid';

const Feed = ({ posts }) => {
  const postsMap = posts.map((post) => {
    return (
      <Post
        key={uuidv4()}
        post={post}
      />
    );
  });
  return <>{postsMap}</>;
};
export default Feed;
