import { Helmet } from "react-helmet";
import css from "./Homepage.module.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className={css.container}>
        <h1 className={css.uptext}>Campers of your dreams</h1>
        <h2 className={css.downtext}>
          You can find everything you want in our catalog
        </h2>

        <Link to="/catalog" className={css.button}>
          View Now
        </Link>
      </div>
    </>
  );
};

export default Homepage;
