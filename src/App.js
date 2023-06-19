import { useEffect, useState } from 'react';
import Header from './components/Header';

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
      <Header />
    </div>
  );
}

export default App;
