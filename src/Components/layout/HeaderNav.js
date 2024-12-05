import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>X</span>
        <h3>Xavier Romeu</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/top"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Top 5 products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
