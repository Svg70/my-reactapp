import React from 'react'
import Users from './Users'
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setStateAC, followAC, unfollowAC, paggianatorChangedAC, setTotalCountAC } from '../../../redux/users-reducer';

class UsersContainer extends React.Component{
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {  
                this.props.setState(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onSelectedPageChanged(p) {
        debugger
        this.props.pagginatorChanged(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setState(response.data.items)
            })

    }
    render(){
        return<Users usersPage ={this.props.usersPage} 
               follow = {this.props.follow}
               unfollow = {this.props.unfollow}
               onSelectedPageChanged ={this.onSelectedPageChanged} />
    }
} 

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
        pagginatorChanged:(d)=> {
            dispatch(paggianatorChangedAC(d))
        },
        setTotalCount:(totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        
    }

}
 
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)