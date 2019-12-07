import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import {  authentificationThunkCreator, logout } from '../../redux/header-reducer';


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authentification()
    }
    render(){
        return <Header login={this.props.authData.login} logout = {this.props.logout} authStatus={this.props.authData.isAuth}/>
    }
}

const mapStateToProps = (store) => {
    return{ authData: store.auth}
}



export default connect(mapStateToProps,
    {authentification: authentificationThunkCreator, logout})
    (HeaderContainer)