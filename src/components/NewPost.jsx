import { format } from 'date-fns';

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const datetime = format(new Date(), 'MMMM dd, yyyy pp');

    const newPost = {
      title: postTitle,
      body: postBody,
      datetime: datetime,
    };
    console.log(newPost);
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
