import React from 'react';

import './App.css';
import Content from './Content/Content';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const App = () =>{
  return (
    <div className = 'app-wrapper'>
    <Header/>
    <Sidebar/>
    <Content/>
    </div>
  );
}

export default App;
