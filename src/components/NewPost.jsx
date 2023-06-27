import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

const NewPost = ({ addNewPost }) => {
  const API = process.env.REACT_APP_API_URL;
  const history = useHistory();

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const datetime = format(new Date(), 'MMMM dd, yyyy pp');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      title: postTitle,
      datetime: datetime,
      body: postBody,
    };

    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    const newPostData = await response.json();

    addNewPost(newPostData);

    console.log('Post Success', newPost);

    setPostTitle('');
    setPostBody('');
    history.push('/');
  };

  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='title'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='body'>Body:</label>
        <textarea
          id='postBody'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
