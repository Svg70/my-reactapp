import React from 'react'
import User from './User/User'

import styles from './Users.module.css'

let Users = (props) => {
    
        let pageIdentificators = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
        let pageArray = []
        for (let i = 1; i <= pageIdentificators; i++) {
            pageArray.push(i)
        }
        let arr = pageArray.map(p => <span key={p} className={(props.usersPage.currentPage === p) ? styles.pageSelector : ''}
            onClick={(e) => { props.onSelectedPageChanged(p) }}>|{p}|</span>)

        let usersArray = props.usersPage.users.map(e => <User key={e.id}
            e={e} follow={props.follow} unfollow={props.unfollow} buttonFalse = {props.buttonFalse} buttonActive ={props.usersPage.buttonActive}/>)
        return (<div>
            
            {arr}
            {usersArray}
        </div>)
    
}
export default Users