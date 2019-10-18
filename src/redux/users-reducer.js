let initialstate = {
    users: [
        
    ]


}

let usersReducer = (state = initialstate, action) => {
  
    switch (action.type) {
        case ('FOLLOW'): {
            debugger
            let newState = { ...state };
            newState.users = [ ...state.users ];
            newState.users.map(e => { if (e.id === action.num) { return e.followed = false } else {return e } });
            return newState
        }
        case ('UNFOLLOW'): {
            
            let newState = { ...state };
            newState.users = [ ...state.users ];
            newState.users.map(e => { if (e.id === action.num) {return e.followed = true } else {return e } });
            return newState;
        }
        case ('SET_STATE'):
            return { ...state, users: [ ...state.users, ...action.state ]}
        default:
            return state
    }

}
export const followAC = (id) => {
    return { type: 'FOLLOW', num: id }
}
export const unfollowAC = (id) => {
    return { type: 'UNFOLLOW', num: id }
}
export const setStateAC = (state) => {
    return { type: 'SET_STATE', state: state }
}
export default usersReducer