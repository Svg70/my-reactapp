import React from 'react'
import styles from './MyPosts.module.css'
import Post from '../Post/Post'


const MyPosts = (props) => {
    let newPostRef = React.createRef()
    let addPost = () =>{
        props.addPost()
    }

    let onTextAreaChange = () => {
        let newText = newPostRef.current.value
        props.onTextAreaChange(newText)
    }

    let postsArray = props.profilePage.posts.map(p => 
    <Post name = {p.name} id ={p.id} like = {p.like} postText ={p.postText}/>)

    return <div>
        <div>Мои посты</div>
            <textarea ref = {newPostRef} 
            value = {props.profilePage.newPostText} onChange={onTextAreaChange} />
            <button onClick = {addPost}>Добавить новый пост</button>
            {postsArray}
    </div>
}
export default MyPosts