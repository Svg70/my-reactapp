import React from 'react';
import styles from './Header.module.css';

const Header = () =>{
  return (
    <div className = {styles.header}>
        <img className = {styles.logo} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfkowhbqe2_bDPbx0A9CJlpKF2gnMwMwu8p3JFqnbDytwMNiwzw"/>
    </div>
  );
}

export default Header;
