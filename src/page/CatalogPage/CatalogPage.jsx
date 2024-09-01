import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import CampList from "../../components/CampList/CampList.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
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
      <CampList />
    </div>
  );
};

export default CatalogPage;
