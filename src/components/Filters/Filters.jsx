import css from "./Filters.module.css";
import { icons } from "../../../public/Icons /index.js";
const Filters = () => {
  return (
    <div>
      <h2 className={css.heder}>Filters</h2>
      <ul>
        <li>
          <svg width="20" height="20" className={css.togglePassword}>
            <use xlinkHref={`${icons}#icon-wind`} />
          </svg>
          <span>AC</span>
        </li>
        <li>
          <svg width="20" height="20" className={css.togglePassword}>
            <use xlinkHref={`${icons}#icon-wind`} />
          </svg>
          <span>Automatic</span>
        </li>
        <li>
          <svg width="20" height="20" className={css.togglePassword}>
            <use xlinkHref={`${icons}#icon-wind`} />
          </svg>
          <span>AC</span>
        </li>
        <li>
          <svg width="20" height="20" className={css.togglePassword}>
            <use xlinkHref={`${icons}#icon-tv`} />
          </svg>
          <span>TV</span>
        </li>
        <li>
          <svg width="20" height="20" className={css.togglePassword}>
            <use xlinkHref={`${icons}#icon-shower`} />
          </svg>
          <span>Bathroom</span>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
