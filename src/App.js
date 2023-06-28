import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import NewPost from './components/NewPost';
import DeletePost from './components/DeletePost';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const fetchPosts = async () => {
    const response = await fetch(API);
    const postData = await response.json();
    setPosts(postData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(filteredResults);
  }, [posts, search]);

  const addNewPost = (newPost) => {
    console.log(JSON.stringify(newPost, null, 2));
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const onDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    console.log(typeof id, JSON.stringify(updatedPosts, null, 2));
    setPosts(updatedPosts);
  };

  return (
    <div className='App'>
      <Header title='Insight into React' />
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
          <DeletePost
            posts={posts}
            onDeletePost={onDeletePost}
          />
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
