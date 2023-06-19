import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
  const fetchToys = async () => {
    const response = await fetch(apiUrl).then((response) => response.json());

    console.log(response);
  };

  useEffect(() => {
    fetchToys();
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
        />
        <p>Phase 2 Project</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
