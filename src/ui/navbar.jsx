import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import Searchbar from "./SearchBar";
import { useSelector } from "react-redux";
import React, { Fragment } from 'react';

function Navbar(){

    
  let username = useSelector(state=>state.account.username);


  const handleLogOut = ()=>{
    username = useSelector('');
  }
  
    return(
        <nav className={styles.navbar}>
            <ul className={styles.navUl}>
                <div className={styles.home}>
                <li>
                    <NavLink to="/" className={styles.links}>Home</NavLink>
                </li>
                </div>

                <Fragment className={styles.searchbar} >
                   <Searchbar/>
                </Fragment>
                
                <div className={styles.sign}>
                    {
                        username ? 
                        <>
                        <p className={styles.links}>Welcome  {username}</p>
                        <NavLink to="Login" className={styles.links} onClick={handleLogOut}>Log Out</NavLink>
                        </>:
                    <>
                    <li>
                        <NavLink to="signup" className={styles.links}>Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to="Login" className={styles.links}>Login</NavLink>
                    </li>
                    </>
                    }
              
                </div>
            </ul>
        </nav>
    )
}


export default Navbar;