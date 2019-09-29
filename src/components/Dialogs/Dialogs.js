import React from 'react';
import styles from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

const Dialogs = () => {
    return (
        <div>
            <div className={styles.dialogsWrapper}>
                <div className={styles.names}>
                    <NavLink to= './dialogs/1'>Маша
                    </NavLink>
                    <NavLink to= './dialogs/2'>Andrew
                    </NavLink>
                </div>
                <div className={styles.messages}>
                    <div>How are you?</div>
                    <div>When will you learn React?</div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
