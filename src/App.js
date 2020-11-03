import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar/>
      <div className="Main-content">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </>
  );
}

export default App;
