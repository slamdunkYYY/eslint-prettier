import React from 'react';
import LoadScript from 'react-load-script';
import logo from './logo.svg';
import './App.css';

function App() {
  const abc = 'abc';
  return (
    <div className="App">
      <LoadScript></LoadScript>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {abc}
        </a>
      </header>
    </div>
  );
}

export default App;
