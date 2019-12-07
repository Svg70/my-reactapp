import React, {Component}from 'react';

import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route,  withRouter } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Users from './components/Content/Users/Users';
import UsersContainer from './components/Content/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";

import Loader from './assets/Loader/loader';
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
}
render(){
  debugger
  if (!this.props.initialized) {
    return <Loader/>
}
  return (
    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app-wrapper-content'>
          {/* ? - для условия в ContentContainer, на случай отсутствия ID профайла в пути */}
          <Route path='/profile/:userId?' render = {() => <ContentContainer />} />
          <Route path='/dialogs' render = {() => <DialogsContainer />} />
          <Route  path = '/users' render ={()=><UsersContainer/>}/>
          <Route  path = '/login' render ={()=><Login/>}/>
        </div>
      </div>

  );}
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
