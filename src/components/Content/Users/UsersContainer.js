import React from 'react'
import Users from './Users'
import store from '../../../redux/redux-store'
import { connect } from 'react-redux';
import { setStateAC, followAC, unfollowAC, paggianatorChangedAC, setTotalCountAC } from '../../../redux/users-reducer';
const mapStateToProps = (store) => {


    return {
        usersPage: store.usersPage,
        totalUsersCount: store.totalUsersCount,
        pageSize: store.pageSize,
        currentPage: store.currentPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setState: (state) => {
            
            dispatch(setStateAC(state))
        },
        setTotalCount:(totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        pagginatorChanged:(d)=> {
            dispatch(paggianatorChangedAC(d))
        }
    }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer