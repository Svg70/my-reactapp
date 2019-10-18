import React from 'react'
import Users from './Users'
import store from '../../../redux/redux-store'
import {connect} from 'react-redux';
import { setStateAC, followAC, unfollowAC } from '../../../redux/users-reducer';
const mapStateToProps = (store) => {
    
    
    return { usersPage: store.usersPage }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => { dispatch(unfollowAC(id)) 
        },
        setState: (state) => { dispatch(setStateAC(state)) 
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer