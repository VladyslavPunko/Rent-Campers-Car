import { useEffect, useState } from "react";
import { getTracks } from "../../campers-APi";
import css from "./CampList.module.css";
import CampsItem from "../CampsItem/CampsItem";

const CampList = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTracks();
        console.log("Full response:", response);

        setCamps(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul className={css.listCampers}>
      {camps.map((camp) => (
        <li className={css.listItem} key={camp.id}>
          <CampsItem data={camp} />
        </li>
      ))}
    </ul>
  );
};
export default CampList;
