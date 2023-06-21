import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import NewPost from './components/NewPost';

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
      <Switch>
        <Route
          exact
          path='/'
        >
          <Home posts={searchResults} />
        </Route>
        <Route
          exact
          path='/post'
        >
          <NewPost />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
