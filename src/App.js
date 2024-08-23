import logo from './logo.svg';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header name="Camila" color="purple" />
      <Main greet="Gomez" />
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
