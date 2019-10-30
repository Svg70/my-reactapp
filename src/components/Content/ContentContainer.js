import React from 'react'
import Content from './Content'
import * as axios from 'axios'
import { setProfileAC, profileShowThunkCreator } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { userAPI } from '../../api/api';
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthPedirect';
class ContentContainer extends React.Component{
    componentDidMount(){

        this.props.profileShow(this.props.match.params.userId)
    }
    
    render(){
        
        return <Content photo = {this.props.profilePage.profilePhoto}
        fullName = {this.props.profilePage.fullName}/>
    }
}
let AuthRedirectComponent = withAuthRedirect(ContentContainer)
const mapStateToProps = (store) => {
    return{profilePage: store.profilePage}
}



let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setProfile: setProfileAC,  profileShow: profileShowThunkCreator})(WithRouterProfileContainer)