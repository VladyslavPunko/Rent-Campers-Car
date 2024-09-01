import { useEffect, useState } from "react";
import { getTracks } from "../../campers-APi";
import css from "./CampList.module.css";
import CampsItem from "../CampsItem/CampsItem";
import LoadMore from "../LoadMore/LoadMore";

const CampList = () => {
  const [camps, setCamps] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const fetchData = async (pageNumber) => {
    try {
      const response = await getTracks();
      const startIndex = (pageNumber - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCamps(response.slice(0, endIndex));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ul className={css.listCampers}>
        {camps.map((camp) => (
          <li className={css.listItem} key={camp.id}>
            <CampsItem data={camp} />
          </li>
        ))}
      </ul>

      <LoadMore handleLoadMore={handleLoadMore} />
    </>
  );
};

export default CampList;
