import React from 'react'
import Content from './Content'
import * as axios from 'axios'
import { setProfileAC } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class ContentContainer extends React.Component{
    componentDidMount(){
        
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${this.props.match.params.userId}`)
            .then(response => {  
                
                     this.props.setProfile(response.data)
            }
        )
    }
    render(){
        
        return <Content photo = {this.props.profilePage.profilePhoto}
        fullName = {this.props.profilePage.fullName}/>
    }
}

const mapStateToProps = (store) => {
    return{profilePage: store.profilePage}
}


let WithRouterProfileContainer = withRouter(ContentContainer)
export default connect(mapStateToProps,
    {
        setProfile: setProfileAC
    }
    )
    (WithRouterProfileContainer)