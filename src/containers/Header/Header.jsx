import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className={classes.row}>
          <Link to="/">
            <div className={classes.logo}>
              <img src="/img/logo.png" alt="" />
              <span>Rick And Morty</span>
            </div>
          </Link>
          <div className={classes.menu}>
            <nav className={classes.list}>
              <NavLink to="/wiki">Wiki</NavLink>
              <li>HZ</li>
              <li>HZ2</li>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
