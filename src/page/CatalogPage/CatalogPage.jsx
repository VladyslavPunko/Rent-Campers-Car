import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import CampList from "../../components/CampList/CampList.jsx";
import { fetchCampers } from "../../campers-APi.js";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [camps, setCamps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCampers();
        console.log("Full response:", response);

        setCamps(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={css.container}>
      <HelmetProvider>
        <Helmet>
          <title>Catalog</title>
        </Helmet>
      </HelmetProvider>
      <div>
        <InputSearch />
        <Filters />
      </div>
      <CampList camps={camps} />
    </div>
  );
};

export default CatalogPage;
