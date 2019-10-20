import React from 'react'
import User from './User/User'
import * as axios from 'axios'
import styles from './Users.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props);
        debugger
    }


    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setTotalCount(response.data.totalCount)
                this.props.setState(response.data.items)
            })
    }
    onSelectedPageChanged(p) {

        this.props.pagginatorChanged(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setState(response.data.items)
            })

    }

    render() {
        let pageIdentificators = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
        let pageArray = []
        for (let i = 1; i <= pageIdentificators; i++) {
            pageArray.push(i)
        }
        let arr = pageArray.map(p => <span className={(this.props.usersPage.currentPage === p) ? styles.pageSelector : ''}
            onClick={() => { this.onSelectedPageChanged(p) }}>|{p}|</span>)

        let usersArray = this.props.usersPage.users.map(e => <User key={e.id}
            e={e} follow={this.props.follow} unfollow={this.props.unfollow} />)
        return (<div>
            {arr}
            {usersArray}
        </div>)
    }
}
export default Users