import React from "react";
import "assets/styles/header.scss";
import { authRoutes } from "routes/auth";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="top-bar__container">
            <div className="container__logo">
              <h3>ORBIQON</h3>
            </div>
            <div className="container__menu">
              <Link className="menu__item" to={authRoutes.ROUTE_LOGIN}>
                <h5>Login</h5>
              </Link>
              <Link
                className="menu__item"
                to={authRoutes.ROUTE_FORGOT_PASSWORD}
              >
                <h5>Forgot Password</h5>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <h2>Hello world</h2>
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
