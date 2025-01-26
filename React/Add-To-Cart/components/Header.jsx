import { NavLink } from "react-router-dom";

const Header = ({ cartItems }) => {
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.count || 1),
    0
  );

  return (
    <div className="header-container">
      <NavLink to="/">LOGO</NavLink>
      <ul className="header-items">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>ABOUT</li>
        <li>
          <NavLink to="/cart" className="list-unstyled text-light p-0 pointer">
            <i className="fa-solid fa-cart-shopping fs-3"></i>
            <span
              className="text-decoration-none count rounded-pill text-dark position-absolute top-0 roght"
              style={{ backgroundColor: "orange" }}
            >
              {totalItems}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
