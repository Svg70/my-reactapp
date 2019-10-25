import React from 'react';
import styles from './Header.module.css';
import logo from '../../logo.png'
import { NavLink } from "react-router-dom";
const Header = (props) =>{
  
  return (
    
    <div className = {styles.header}>
        <img className = {styles.logo} src = {logo}/>
        <NavLink to = '/login'><div className ={ styles.status }>
        {(props.authStatus||props.authStatus ===undefined)? String(props.login):'LOGIN'}
        </div></NavLink>
    </div>
  );
}

export default Header;
