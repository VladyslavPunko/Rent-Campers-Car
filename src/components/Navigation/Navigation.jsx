import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const activeLinks = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};
const Navigation = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Logo />
        <div className={css.navlink}>
          <NavLink to="/" className={activeLinks}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={activeLinks}>
            Catalog
          </NavLink>
          <NavLink to="/favorite" className={activeLinks}>
            Faworite
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
