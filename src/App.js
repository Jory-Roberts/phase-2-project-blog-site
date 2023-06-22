import { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { format } from 'date-fns';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import NewPost from './components/NewPost';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const history = useHistory();

  const [posts, setPosts] = useState([]);

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const id = posts.length + 1;

    const newPost = {
      id: id,
      title: postTitle,
      body: postBody,
      datetime: datetime,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
    console.log(newPost);
    setPostTitle('');
    setPostBody('');
    history.push('/');
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
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
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
