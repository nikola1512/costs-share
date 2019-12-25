import React from 'react';
import { ReactComponent as Logo } from "../Logo.svg";
import {Link} from "react-router-dom";
import {ABOUT_US, HOME, PRODUCTS} from "../constants/routes";

const AppHeader = () => {
  return (
    <div className="c-header">
      <div className="c-header__ctn">
        <div className="c-header__left">
          <Link className="c-header__logo" to={HOME}>
            <Logo className="c-header__logo-icon"/>
          </Link>
        </div>
        <div className="c-header__main">
          <nav className="c-header-nav">
            <Link className="c-header-nav__item" to={ABOUT_US}>About</Link>
            <Link className="c-header-nav__item" to={PRODUCTS}>Products</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
