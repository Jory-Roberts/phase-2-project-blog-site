import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPosts = async () => {
    const response = await fetch(API).then((response) => response.json());
    setPosts(response);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  }, [posts, search]);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

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
          <NewPost addNewPost={addNewPost} />
        </Route>
        <Route
          exact
          path='/post/:id'
        >
          <EditPost />
        </Route>
        <Route
          exact
          path='/about'
          component={About}
        ></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
