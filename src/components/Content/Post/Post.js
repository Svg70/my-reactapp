import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.ava}>
                <img src="http://waralbum.ru/wp-content/uploads/yapb_cache/92635586_cor.133qv10ylnqsc04scs80s48ok.ejcuplo1l0oo0sk8c40s8osc4.th.jpeg" />
            </div>
            <div className={styles.innerWrapper}>
                <div className={styles.postHeader}>
                <div className={styles.nickName}>
                    {props.name}
                </div>
                <div className={styles.date}>
                    11.11.2019 11:11:22
                </div>
                </div>
                <div className={styles.messageText}>
                    {props.postText}
            </div>
                <div className={styles.postfooter}>
                    <div className={styles.like}>
                        Like: 
                        <span>{props.like}</span>
            </div>
                    <div className={styles.replay}>
                        <button>Ответить</button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Post;
