import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>Content</a>
            </div>
        </div>
    );
}

export default Sidebar;