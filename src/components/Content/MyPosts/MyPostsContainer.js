import React from 'react'
import MyPosts from './MyPosts'
import { addPostAC, onTextAreaChangeAC } from '../../../redux/profile-reducer';
import {connect} from 'react-redux';

// const MyPostsContainer = (props) => {

    // let addPost = () =>{
    //     props.dispatch(addPostAC())
    // }

    // let onTextAreaChange = (newText) => {
    //     props.dispatch(onTextAreaChangeAC(newText))
    // }
//     return <div>
//     <MyPosts addPost = {addPost} onTextAreaChange = {onTextAreaChange} profilePage = {props.profilePage}/>
// </div>
// }
    const mapStateToProps = (store) => {
        return{
            profilePage: store.profilePage
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return{
            onTextAreaChange: (newText) => {
                dispatch(onTextAreaChangeAC(newText))
        },
            addPost: () => {
                dispatch(addPostAC())
            }
        }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer