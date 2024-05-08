import './App.css';
import React from 'react';
import Header from './components/Food/layout/Header';
import Meals from './components/Food/Meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <div id="main">
        <Meals />
      </div>
    </>
  );
};

export default App;
