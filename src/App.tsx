import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';
import ComponentB from './components/componentB';
import Bai1 from './components/counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bai1></Bai1>
        <ComponentA></ComponentA>
        <ComponentB></ComponentB>
      </header>
    </div>
  );
}

export default App;
