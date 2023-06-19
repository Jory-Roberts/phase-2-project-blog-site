import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchToys = async () => {
    const response = await fetch(apiUrl).then((response) => response.json());
    setPosts(response);

    console.log(response);
  };

  useEffect(() => {
    fetchToys();
  }, []);

  return (
    <div className='App'>
      <Header title='Insight into React JS' />
      <Home posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
