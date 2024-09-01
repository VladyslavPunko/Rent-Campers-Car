import css from "./LoadMore.module.css";
const LoadMore = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.button}>
      Load More
    </button>
  );
};

export default LoadMore;
