import React from 'react'
import Users from './Users'
import { connect } from 'react-redux';
import { folowingThunkCreator, preloaderChangedAC, buttonFalse, getUsersThunkCreator, unfolowingThunkCreator} from '../../../redux/users-reducer';
import Krutilka from './../../../assets/images/preloader.gif'



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }
    onSelectedPageChanged =(p) =>{
        this.props.getUsersThunkCreator(p, this.props.usersPage.pageSize)
    }
    render() {
        return (
        <>{this.props.usersPage.preloader === true ? <img src={Krutilka} /> : null}
            <Users usersPage={this.props.usersPage}
                // onSelectedPageChanged={(p) => this.onSelectedPageChanged.bind(this)}
                // onSelectedPageChanged={(p) => this.onSelectedPageChanged(p)}
                onSelectedPageChanged={this.onSelectedPageChanged}
                preloaderChanged={this.props.preloaderChanged}
                buttonFalse = {this.props.buttonFalse}
                getUsersThunkCreator = {this.props.getUsersThunkCreator}
                folowing = {this.props.folowing}
                unfolowing = {this.props.unfolowing}
            />
        </>
        )
    }
}

const mapStateToProps = (store) => {
    return {usersPage: store.usersPage}
}

export default connect(mapStateToProps, {
    
    preloaderChanged: preloaderChangedAC,
    buttonFalse, getUsersThunkCreator, 
    folowing: folowingThunkCreator,
    unfolowing: unfolowingThunkCreator

})(UsersContainer)





// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id))
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id))
//         },
//         setState: (state) => {

//             dispatch(setStateAC(state))
//         },
//         pagginatorChanged: (d) => {
//             dispatch(paggianatorChangedAC(d))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },

//     }

// }