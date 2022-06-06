import './App.css';
import React from 'react';
import Header from './Components/Header/Header.js';
import SimpleBottomNavigation from './Components/MainNav';

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </div>
    </>
  );
}

export default App;
