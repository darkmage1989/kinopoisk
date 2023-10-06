import { useNavigate, useParams } from "react-router-dom";
import { useGetMoveIdQuery, useGetPostsApiQuery } from "../../redux/apis/apis";
import { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import styles from "./MoviePage.module.css";
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const MoviePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const moviePageData = params.id;
  const { data, error, isLoading } = useGetMoveIdQuery({ moviePageData });
  const [show, setShow] = useState(true);
  if (isLoading) {
    return (
      <Button  variant="primary" disabled>
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
  console.log(data.backdrop.url);
  return (
    <div className={styles.movie__box}>
      <div className={styles.movie__text}>
        <h2>Название: {data.name}</h2>
        <div className={cx('movie__text_row','movie__text')}>
          <span>Cборы в мире: {data.fees.world.value} $</span>
          <span>Рейтинг: {data.rating.kp.toFixed(1)}</span>
        </div>
        <span>Описание: {data.shortDescription}</span>
      </div>

      <img
        className={styles.img__movie}
        src={data.backdrop.url}
        alt={data.backdrop.url}
      />
      <div className={styles.movie__text}>
        <span>Подробное описание: {data.description}</span>
      </div>
    </div>
  );
};

export default MoviePage;
