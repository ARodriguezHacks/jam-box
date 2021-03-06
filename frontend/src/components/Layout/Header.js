import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/">
            <li>Jam Box Logo</li>
          </NavLink>
          <NavLink to="/search">
            <li>Songs</li>
          </NavLink>
          <NavLink to="/albums">
            <li>Albums</li>
          </NavLink>
          <NavLink to="/shop">
            <li>Shop</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
