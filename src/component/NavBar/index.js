import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./index.css";

export default function NavBar() {
  return (
    <header className="header__main">
      <nav className="header__nav">
        <Link to="/react-ecommerce">
          <div className="header__title">Bahia informal clothing</div>
        </Link>
        <ul className="header__options">
          <div className="container__category">
            <Link to="/category/trajes">
              <li>Trajes</li>
            </Link>
            <Link to="/category/camisas">
              <li>Camisas</li>
            </Link>
            <Link to="/category/remeras">
              <li>Remeras</li>
            </Link>
            <Link to="/category/abrigos">
              <li>Abrigos</li>
            </Link>
          </div>
        </ul>
        <ul className="header__options">
          <li>Envios</li>
          <Link to="/form">
            <li>Contacto</li>
          </Link>
          <Link to="./Cart">
            <li>
              <CartWidget />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
