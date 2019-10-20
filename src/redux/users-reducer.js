let initialstate = {
    users: [

    ],
    totalUsersCount: 20,
    pageSize: 100,
    currentPage: 1
}

let usersReducer = (state = initialstate, action) => {
  
    switch (action.type) {
        case ('FOLLOW'): {
            
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
        case('SET_TOTAL_USERS_COUNT'):{
            let newState ={...state}
            newState.totalUsersCount = action.totalCount
            return newState
        }
        case ('SET_STATE'):{
            let newState = {...state};
            newState.users = [...state.users];
            newState.users = action.state
            return newState
        }

        case ('PAGINATOR_CHANGED'):
            return { ...state, currentPage: action.currentPage}

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
export const setTotalCountAC = (totalCount) => {
    return { type: 'SET_TOTAL_USERS_COUNT', totalCount}
}
export const paggianatorChangedAC = (d) => {
    return{type:'PAGINATOR_CHANGED', currentPage: d}
}
export default usersReducer