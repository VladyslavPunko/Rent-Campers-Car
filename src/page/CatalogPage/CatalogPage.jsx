import { Helmet } from "react-helmet";
import InputSearch from "../../components/InputSearch/InputSearch.jsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Catalog</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <InputSearch />
    </div>
  );
};

export default CatalogPage;
