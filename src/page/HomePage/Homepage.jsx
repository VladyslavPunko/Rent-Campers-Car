import css from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.uptext}>Campers of your dreams</h1>
      <h2 className={css.downtext}>
        You can find everything you want in our catalog
      </h2>
      <button type="button" className={css.button}>
        View Now
      </button>
    </div>
  );
};

export default Homepage;
