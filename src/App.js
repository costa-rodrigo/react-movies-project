import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'

const App = () => {
  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='App-title'>React Movies App</h1>
      </header>
      <MainContainer />
    </div>
  );
}

export default App;
