const NewPost = () => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='form'>
        <label htmlFor='title'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
        />
        <label htmlFor='body'>Body:</label>
        <textarea
          id='postBody'
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
};
export default NewPost;
