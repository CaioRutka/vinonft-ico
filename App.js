import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainMint from './components/MainMint';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts = { accounts } setAccounts = {setAccounts}/>
        <MainMint accounts = { accounts } setAccounts = {setAccounts}/>
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default App;
