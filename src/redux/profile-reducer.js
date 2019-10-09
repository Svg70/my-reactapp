let profileReducer = (profilePage, action) => {
    switch (action.type) {
        case ('ADD_POST'):
            let newPost = {
                id: 1,
                postText: profilePage.newPostText,
                name: 'Борис Гребенщиков',
                like: 0
            }
            profilePage.posts.push(newPost)
            profilePage.newPostText = ""

            break;
        case ('TEXT_AREA_CHANGE'):
            profilePage.newPostText = action.t
            break;
        default:
            break
    }
    return profilePage
}
export default profileReducer