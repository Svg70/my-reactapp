import React from 'react'

import * as axios from 'axios'
import { setProfileAC } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Header from './Header';
import { setAuthAC } from '../../redux/header-reducer';

class HeaderContainer extends React.Component{
    componentDidMount(){
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then(response => { 
                if (response.data.resultCode ===0 ){ 
                     this.props.setAuth(response.data)
                }
            }
        )
    }
    render(){
        
        return <Header login={this.props.authData.login} authStatus={this.props.authData.authStatus}/>
    }
}

const mapStateToProps = (store) => {
    return{ authData: store.auth}
}



export default connect(mapStateToProps,
    {setAuth: setAuthAC})
    (HeaderContainer)