import css from "./InputSearch.module.css";
import { CiLocationOn } from "react-icons/ci";

const InputSearch = ({ location, setLocation }) => {
  return (
    <div className={css.container}>
      <label htmlFor="locationInput" className={css.label}>
        Location
      </label>
      <div className={css.inputContainer}>
        <CiLocationOn className={css.icon} />
        <input
          id="locationInput"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="City"
          className={css.input}
        />
      </div>
    </div>
  );
};

export default InputSearch;
