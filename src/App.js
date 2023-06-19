import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);

  const fetchToys = async () => {
    const response = await fetch(apiUrl).then((response) => response.json());

    console.log(response);
  };

  useEffect(() => {
    fetchToys();
  }, []);

  return (
    <div className='App'>
      <Header title='Insight into React JS' />
      <Footer />
    </div>
  );
}

export default App;
