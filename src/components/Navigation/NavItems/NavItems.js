import React from 'react';
import NavItem from '../../Navigation/Navbar/NavItem/NavItem';
import './NavItems.css';

const NavItems = props => {
  return (
    <ul className="nav-items">
      <NavItem link="/">Shopping</NavItem>
      <NavItem link="/">Checkout</NavItem>
    </ul>
  );
};

export default NavItems;
