import css from "./Filters.module.css";
import { icons } from "../aaa/sprite/index.js";
import { useState } from "react";

const Filters = () => {
  const [checkedState, setCheckedState] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedState({
      ...checkedState,
      [name]: checked,
    });
  };

  return (
    <div className={css.container}>
      <p className={css.filter}>Filter</p>
      <h2 className={css.header}>Vehicle Equipment</h2>
      <ul className={css.list}>
        <li className={`${css.listItem} ${checkedState.ac ? css.active : ""}`}>
          <label>
            <input
              type="checkbox"
              name="ac"
              checked={checkedState.ac}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#wind`} />
            </svg>
            <span>AC</span>
          </label>
        </li>
        <li
          className={`${css.listItem} ${
            checkedState.automatic ? css.active : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="automatic"
              checked={checkedState.automatic}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#diagram`} />
            </svg>
            <span>Automatic</span>
          </label>
        </li>
        <li
          className={`${css.listItem} ${
            checkedState.kitchen ? css.active : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="kitchen"
              checked={checkedState.kitchen}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#cup-hot`} />
            </svg>
            <span>Kitchen</span>
          </label>
        </li>
        <li className={`${css.listItem} ${checkedState.tv ? css.active : ""}`}>
          <label>
            <input
              type="checkbox"
              name="tv"
              checked={checkedState.tv}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#tv`} />
            </svg>
            <span>TV</span>
          </label>
        </li>
        <li
          className={`${css.listItem} ${
            checkedState.bathroom ? css.active : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="bathroom"
              checked={checkedState.bathroom}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#kaplia`} />
            </svg>
            <span>Bathroom</span>
          </label>
        </li>
      </ul>
      <h2 className={css.header}>Vehicle type</h2>
      <ul className={css.list}>
        <li className={`${css.listItem} ${checkedState.ac ? css.active : ""}`}>
          <label>
            <input
              type="checkbox"
              name="ac"
              checked={checkedState.ac}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#kwadrat-tri`} />
            </svg>
            <span>Van</span>
          </label>
        </li>
        <li
          className={`${css.listItem} ${
            checkedState.automatic ? css.active : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="automatic"
              checked={checkedState.automatic}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#kwadrat-chetyre`} />
            </svg>
            <span>Integrated</span>
          </label>
        </li>
        <li
          className={`${css.listItem} ${
            checkedState.kitchen ? css.active : ""
          }`}
        >
          <label>
            <input
              type="checkbox"
              name="kitchen"
              checked={checkedState.kitchen}
              onChange={handleCheckboxChange}
              className={css.checkbox}
            />
            <svg width="32" height="32" className={css.icon}>
              <use xlinkHref={`${icons}#kwadrat-shest`} />
            </svg>
            <span>Alcove</span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
