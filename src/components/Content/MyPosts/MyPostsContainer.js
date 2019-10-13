import React from 'react'
import MyPosts from './MyPosts'
import { addPostAC, onTextAreaChangeAC } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

    let addPost = () =>{
        props.dispatch(addPostAC())
    }

    let onTextAreaChange = (newText) => {
        
        props.dispatch(onTextAreaChangeAC(newText))
    }


    return <div>
        <MyPosts addPost = {addPost} onTextAreaChange = {onTextAreaChange} profilePage = {props.profilePage}/>
    </div>
}
export default MyPostsContainer