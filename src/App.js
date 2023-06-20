import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch(apiUrl).then((response) => response.json());
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='App'>
      <Header title='Insight into React JS' />
      <Nav />
      <Home posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
