/* eslint-disable jsx-a11y/img-redundant-alt */
import { url } from "inspector";
import { data } from "../../interfaces/dataInterface";
import style from "./Movie.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface MovieProps {
  data: Array<data>;
}
const Movie = ({ data }: MovieProps) => {
  const navigate = useNavigate()
  return (
    <div className={style.movie__box}>
      {data.map((movie) => (
        <div key={movie.id}>
          {movie.poster ? (
            <img
              className={style.poster}
              src={movie.poster}
              alt={movie.poster}
            />
          ) : (
            <img
              className={style.poster}
              src="/images/no-image.jpg"
              alt="/no-image.jpg"
            />
          )}
          <div className={style.movie__block}>
            <div className={style.movie__text__box}>
              <div className={style.movie__rating__box}>
                <img
                  className={style.movie__star__icon}
                  src="/icons/star.svg"
                  alt="star"
                />
                <span>{movie.rating.toFixed(1)}</span>
              </div>

              <span>Голосов: {movie.votes}</span>
            </div>
            <span style={{ textAlign: "center" }}>{movie.name}</span>
            <Button onClick={()=> navigate(`moviePage/${movie.id}`)} variant="primary" size="sm">
              Подробнее
            </Button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
