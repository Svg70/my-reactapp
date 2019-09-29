import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <a>Content</a>
            </div>
        </div>
    );
}

export default Sidebar;