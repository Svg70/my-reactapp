import React from 'react';

import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import { tsPropertySignature } from '@babel/types';
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render = {() => <Content profilePage = {props.state.profilePage}/>} />
          <Route path='/dialogs' render = {() => <Dialogs dialogsPage = {props.state.dialogsPage}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
