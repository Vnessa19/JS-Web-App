//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../topic">Web Dev Concepts</Link>
        <Link to="../gallery">Gallery</Link>
        <Link to="../staff">Staff</Link>
        <Link to="../order">Order</Link>
        <Link to="../travel">Travel Record</Link>
    </nav>
  );
}

export default Nav;
