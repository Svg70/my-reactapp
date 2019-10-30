import React from 'react'
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
const mapStateToProps = (store) => {
    return{
        authStatus: store.auth.authStatus}
}

export const withAuthRedirect = (Component) =>{
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.authStatus)return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
        
    }
    let ConnectedAuthRedirectComponent =connect(mapStateToProps)(RedirectComponent)
    return ConnectedAuthRedirectComponent 
}