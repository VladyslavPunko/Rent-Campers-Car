import { Helmet } from "react-helmet";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters.jsx";
import { HelmetProvider } from "react-helmet-async";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <HelmetProvider>
        <Helmet>
          <title>Catalog</title>
        </Helmet>
      </HelmetProvider>
      <InputSearch />
      <Filters />
    </div>
  );
};

export default CatalogPage;
