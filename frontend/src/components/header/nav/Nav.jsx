import React from "react";
import styles from "./nav.module.css";
import { useMyContext } from "../../../MyContext";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const {inCart } = useMyContext()
  const {cart} = inCart
  const isAdmin = true


  // style for Link navigation
  const linkStyle = {
    margin: ".5em",
    padding: ".5em",
    textDecoration: "none",
    color: '#FAF3DD',
    border: '1px solid #FAF3DD'
  };
  const activeLinkStyle = {
    color: '#ebc33f',
  };

  const flexEnd = {
    padding: ".5em",
    textDecoration: "none",
    color: '#FAF3DD',
    border: '1px solid #FAF3DD',
    marginLeft: "auto", 
  }

  let activeStyle = {
    color: '#b4942b',
    textDecoration: "underline",
    
  };

  return (
    <div className={styles.nav}>
      <NavLink to="/" style={linkStyle}> home </NavLink>
      <NavLink to="/about" style={linkStyle}>  about </NavLink>
      {isAdmin && <NavLink to="/admin" style={linkStyle}>admin</NavLink>}
      <NavLink to="/cart" style={flexEnd}> 🛍️({cart.length}) </NavLink>
    </div>
  );
};

export default Nav;
