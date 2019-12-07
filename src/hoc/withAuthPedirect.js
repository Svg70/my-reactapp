import React from 'react'
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    return{
        authStatus: store.auth.isAuth}
}

export const withAuthRedirect = (Component) =>{
    debugger
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.authStatus)return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
        
    }
    let ConnectedAuthRedirectComponent =connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent 
}