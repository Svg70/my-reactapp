import React from 'react'
import User from './User'

const Users = (props) => {
    debugger
    if (props.usersPage.users.length === 0) {
    props.setState(
    [{ id: 1, name: 'Liza', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: true, location: { country: 'Russia', city: 'Moscow' } },
    { id: 2, name: 'Pavel', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: false, location: { country: 'GB', city: 'London' } },
    { id: 3, name: 'Masha', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: true, location: { country: 'Russia', city: 'Saint-Peterburg' } }
    ])}
    debugger
    let usersArray = props.usersPage.users.map(e => <User key={e.id} e={e} follow={props.follow} unfollow={props.unfollow} />)
    return <div>
        {
            usersArray
        }
    </div>
}
export default Users