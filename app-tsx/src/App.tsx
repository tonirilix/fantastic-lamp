import React from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';
import GenericTable from './components/GenericTable';
import { UserDto } from './models/userDto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Notification variant="error"><span>Hello</span></Notification>
        <GenericTable<UserDto> onSelectionChanged={(selection) => selection[0].name} />
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
