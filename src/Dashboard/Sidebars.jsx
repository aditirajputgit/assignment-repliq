import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import {
  BsCart3,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" alt="shop" /> SHOP
        </div>
        <hr/>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/admin" className="icon">
            Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products" className="icon">
            Products
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/products" className="icon">
            Categories
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/customer" className="icon">
            Customers
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/" className="icon">
            Inventory
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/admin" className="icon">
            Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
