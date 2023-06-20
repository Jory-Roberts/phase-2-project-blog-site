import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPosts = async () => {
    const response = await fetch(apiUrl).then((response) => response.json());
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  }, [posts, search]);

  return (
    <div className='App'>
      <Header title='Insight into React JS' />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Home posts={searchResults} />
      <Footer />
    </div>
  );
}

export default App;
