import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="nav-container">
      <h4>Bryan</h4>

      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">
          <NavLink to="about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="emma">Emma</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="gold">Gold</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Contact</li>
        <a href="#" className="btn">
          Place an Order
        </a>
      </ul>
    </header>
  );
}

export default Nav