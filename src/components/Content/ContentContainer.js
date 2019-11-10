import React from 'react'
import Content from './Content'
import * as axios from 'axios'
import { setProfileAC, profileShowThunkCreator, getStatus, updateStatus } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { userAPI } from '../../api/api';
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthPedirect';
import { compose } from 'redux';

class ContentContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        
        this.props.profileShow(userId)
        this.props.getStatus(userId)
        
    }
    
    render(){
        
        return <Content photo = {this.props.profilePage.profilePhoto}
        fullName = {this.props.profilePage.fullName} status = {this.props.status}
        updateStatus ={this.props.updateStatus}/>
    }
}

const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    status: state.profilePage.status
})
//join this 3 HOC below in ONE Compose
// let AuthRedirectComponent = withAuthRedirect(ContentContainer)
// let WithRouterProfileContainer = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, {setProfile: setProfileAC,  profileShow: profileShowThunkCreator})(WithRouterProfileContainer)
export default compose(
    connect(mapStateToProps, {setProfile: setProfileAC,  profileShow: profileShowThunkCreator, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ContentContainer)