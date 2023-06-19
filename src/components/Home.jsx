import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      <Feed posts={posts} />
    </main>
  );
};
export default Home;
