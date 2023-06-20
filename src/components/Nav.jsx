const Nav = () => {
  return (
    <nav className='Nav'>
      <form
        className='searchForm'
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor='search'>Search Posts</label>
        <input
          id='search'
          type='text'
          placeholder='Search Posts'
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </nav>
  );
};
export default Nav;
