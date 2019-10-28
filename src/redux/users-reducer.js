let initialstate = {
    users: [

    ],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    preloader: false,
    buttonActive: true
}

let usersReducer = (state = initialstate, action) => {
  
    switch (action.type) {
        case ('FOLLOW'): {
           
            let newState = { ...state };
            newState.users = [ ...state.users ];
            newState.users.map(e => { if (e.id === action.num) { return e.followed = true } else {return e } });
            return newState
        }
        case ('UNFOLLOW'): {
           
            let newState = { ...state };
            newState.users = [ ...state.users ];
            newState.users.map(e => { if (e.id === action.num) {return e.followed = false } else {return e } });
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

        case ('PRELOADER_SHOW'):
                
        return{...state,preloader: !state.preloader}
        case ('BUTTON_FALSE'):  
        
        return{...state,buttonActive: !state.buttonActive}

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
export const preloaderChangedAC = () =>{
    return{type: 'PRELOADER_SHOW'}
}
export const  buttonFalse = () =>{
    return{type: 'BUTTON_FALSE'}
}

export default usersReducer