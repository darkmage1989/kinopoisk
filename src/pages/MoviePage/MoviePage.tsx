import { useNavigate, useParams } from "react-router-dom";
import { useGetMoveIdQuery, useGetPostsApiQuery } from "../../redux/apis/apis";
import { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import styles from "./MoviePage.module.css";

import MoviePageList from "../../components/MoviePageList/MoviePageList";


const MoviePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const moviePageData = params.id;
  const { data, error, isLoading } = useGetMoveIdQuery({ moviePageData });
  const [show, setShow] = useState(true);
  if (isLoading) {
    return (
      <Button className={styles.await} variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  if (error) {
    // обработка ошибки
    if ("status" in error) {
      const message =
        "error" in error ? error.error : JSON.stringify(error.data);
      return (
        <div className={styles.await}>
          <Alert show={show} variant="danger">
            <Alert.Heading>Ошибка</Alert.Heading>
            <p>{message}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Скрыть
              </Button>
            </div>
          </Alert>
          {!show && (
            <Button onClick={() => setShow(true)}>Показать текст ошибки</Button>
          )}
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
