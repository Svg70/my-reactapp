import React from 'react'
import User from './User'
import * as axios from 'axios'

class Users extends React.Component {
    constructor(props) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setState(response.data.items)
                })
       


        // [{ id: 1, name: 'Liza', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: true, location: { country: 'Russia', city: 'Moscow' } },
        // { id: 2, name: 'Pavel', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: false, location: { country: 'GB', city: 'London' } },
        // { id: 3, name: 'Masha', photoUrl: 'https://i.ytimg.com/vi/-452p_9ESbM/hqdefault.jpg', followed: true, location: { country: 'Russia', city: 'Saint-Peterburg' } }
        // ])
    }
    render() {
        let usersArray = this.props.usersPage.users.map(e => <User key={e.id} 
            e={e} follow={this.props.follow} unfollow={this.props.unfollow} />)
        return <div>
            {
                usersArray
            }
        </div>
    }
}
export default Users