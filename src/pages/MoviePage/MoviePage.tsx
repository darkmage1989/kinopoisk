import {  useParams } from "react-router-dom";
import { useGetMoveIdQuery } from "../../redux/apis/apis";
import styles from "./MoviePage.module.css";
import MoviePageList from "../../components/MoviePageList/MoviePageList";
import ErrorRespons from "../../components/ErrorRespons/ErrorRespons";
import Loading from "../../components/Loading/Loading";
const MoviePage = () => {
  const params = useParams();
  const moviePageData = params.id;
  const { data, error, isLoading } = useGetMoveIdQuery({ moviePageData });
  if (isLoading) {
    return (
      <Loading/>
    );
  }
  if (error) {
    // обработка ошибки
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div className={styles.await}>
          <ErrorRespons message={message}/>
        </div>
      );
    } else {
      return <div>{error.message}</div>;
    }
  }
  return (
    <MoviePageList data={data}/>
  );
};

export default MoviePage;
