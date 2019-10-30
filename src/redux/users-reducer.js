import { userAPI } from "../api/api";
import { stat } from "fs";


let initialstate = {
    users: [

    ],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    preloader: false,
    buttonActive: []
}

let usersReducer = (state = initialstate, action) => {

    switch (action.type) {
        case ('FOLLOW'): {
            debugger
            let newState = { ...state };
            newState.users = [...state.users];
            newState.users.map(e => { if (e.id === action.num) { return e.followed = true } else { return e } });
            return newState
        }
        case ('UNFOLLOW'): {
            debugger
            let newState = { ...state };
            newState.users = [...state.users];
            newState.users.map(e => { if (e.id === action.num) { return e.followed = false } else { return e } });
            return newState;
        }
        case ('SET_TOTAL_USERS_COUNT'): {
            let newState = { ...state }
            newState.totalUsersCount = action.totalCount
            return newState
        }
        case ('SET_STATE'): {

            let newState = { ...state };
            newState.users = [...state.users];
            newState.users = action.state
            return newState
        }
        case ('PAGINATOR_CHANGED'):
            return { ...state, currentPage: action.currentPage }
        case ('PRELOADER_SHOW'):
            return { ...state, preloader: action.isFetching }
        case ('BUTTON_FALSE'): {
            return {
                ...state,
                buttonActive: action.isFetching
                    ? [...state.buttonActive, action.userId]
                    : state.buttonActive.filter(id => id != action.userId)
            }
        }
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
    return { type: 'SET_TOTAL_USERS_COUNT', totalCount }
}
export const paggianatorChangedAC = (d) => {

    return { type: 'PAGINATOR_CHANGED', currentPage: d }
}
export const preloaderChangedAC = (isFetching) => {
    return { type: 'PRELOADER_SHOW', isFetching }
}
export const buttonFalse = (isFetching, userId) => {
    return { type: 'BUTTON_FALSE', isFetching, userId }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(preloaderChangedAC(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(paggianatorChangedAC(currentPage))
                dispatch(preloaderChangedAC(false))
                dispatch(setStateAC(response.data.items))
                dispatch(setTotalCountAC(response.data.totalCount))
            })
    }
}
export const folowingThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(buttonFalse(true, userId))
        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followAC(userId))
                }
                dispatch(buttonFalse(false, userId))
            })
    }
}
export const unfolowingThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(buttonFalse(true, userId))
        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(buttonFalse(false, userId))
            })
    }
}
export default usersReducer