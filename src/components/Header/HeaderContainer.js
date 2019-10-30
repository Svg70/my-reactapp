import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import {  authentificationThunkCreator } from '../../redux/header-reducer';


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authentification()
    }
    render(){
        return <Header login={this.props.authData.login} authStatus={this.props.authData.authStatus}/>
    }
}

const mapStateToProps = (store) => {
    return{ authData: store.auth}
}



export default connect(mapStateToProps,
    {authentification: authentificationThunkCreator})
    (HeaderContainer)