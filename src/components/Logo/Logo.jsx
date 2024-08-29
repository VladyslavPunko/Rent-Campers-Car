import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import CamperImage from "../../../public/Camper.png";

const Logo = () => {
  return (
    <div className={css.logoWrapper}>
      <img src={CamperImage} width="40" height="40" alt="Camper logo" />

      <NavLink to="/" className={css.logo}>
        TravelTruck
      </NavLink>
    </div>
  );
};

export default Logo;
