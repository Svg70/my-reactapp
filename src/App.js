import React from 'react';

import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Content/Users/Users';
import UsersContainer from './components/Content/Users/UsersContainer';

const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render = {() => <Content /*profilePage = {props.store.state.profilePage} 
          dispatch ={props.store.dispatch}*//>} />
          <Route path='/dialogs' render = {() => <DialogsContainer /*dialogsPage = {props.store.state.dialogsPage}
          dispatch ={props.dispatch}*//>} />
          <Route exact path = '/users' render ={()=><UsersContainer/>}/>
        </div>
      </div>
    
  );
}

export default App;
