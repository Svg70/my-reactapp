import React from 'react'
import Users from './Users'
import { connect } from 'react-redux';
import * as axios from 'axios'
import { setStateAC, followAC, unfollowAC, paggianatorChangedAC, setTotalCountAC, preloaderChangedAC } from '../../../redux/users-reducer';
import Krutilka from './../../../assets/images/preloader.gif'


class UsersContainer extends React.Component{
    componentDidMount() {
        
        this.props.preloaderChanged()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
        {withCredentials: true})
        
            .then(response => {  
                
                this.props.preloaderChanged()
                this.props.setState(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onSelectedPageChanged(p) {
        
        this.pagginatorChanged(p)
        this.preloaderChanged()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.usersPage.pageSize}`,
            {withCredentials: true})
            .then(response => {
                
                this.preloaderChanged()
                this.setState(response.data.items)
            })

    }
    render(){
        
        return<>{this.props.usersPage.preloader===true ? <img src = {Krutilka} />:null}
        <Users usersPage ={this.props.usersPage} 
               follow = {this.props.follow}
               unfollow = {this.props.unfollow}
               onSelectedPageChanged ={this.onSelectedPageChanged} 
               pagginatorChanged ={this.props.pagginatorChanged}
               setState={this.props.setState}
               preloaderChanged = {this.props.preloaderChanged}
               />
               </>
    }
} 

const mapStateToProps = (store) => {
    return {
        usersPage: store.usersPage,

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
 
export default connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setState: setStateAC,
    pagginatorChanged: paggianatorChangedAC,
    setTotalCount: setTotalCountAC,
    preloaderChanged: preloaderChangedAC
    
})(UsersContainer)