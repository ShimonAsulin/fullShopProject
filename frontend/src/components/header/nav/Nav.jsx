import React from "react";
import styles from "./nav.module.css";
import styled from 'styled-components'
import { useMyContext } from "../../../MyContext";
import { Link  } from "react-router-dom";
const Nav = () => {
  const {inCart } = useMyContext()
  const {cart} = inCart
  const isAdmin = true
  // style for Link navigation
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
  };

  return (
    <div>
      <Link to="/" style={linkStyle}> home </Link>
      <Link to="/about" style={linkStyle}>  about </Link>
      <Link to="/cart" style={linkStyle}> cart({cart.length}) </Link>
      {isAdmin && <Link to="/admin" style={linkStyle}>admin</Link>}
      
    </div>
  );
};

export default Nav;
