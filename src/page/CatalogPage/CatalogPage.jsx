import { Helmet } from "react-helmet";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import css from "./CatalogPage.module.css";
import Filters from "../../components/Filters/Filters.jsx";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Catalog</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <InputSearch />
      <Filters />
    </div>
  );
};

export default CatalogPage;
