import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <nav class="main-nav">
    <ul>
      <li><NavLink to='/tapirs'>Tapirs</NavLink></li>
      <li><NavLink to='/trees'>Trees</NavLink></li>
      <li><NavLink to='/whales'>Whales</NavLink></li>
    </ul>
  </nav>
)

export default Header;
