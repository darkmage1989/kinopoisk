import { movie, person } from '../../interfaces/dataInterface';
import styles from './MoviePageList.module.css'
import classNames from "classnames/bind";
let cx = classNames.bind(styles);
interface MoviePageListProps {
    data: movie
}
 
const MoviePageList = ({data}:MoviePageListProps) => {
    return ( <div className={styles.movie__box}>
        <div className={styles.movie__text}>
          <h2>Название: {data.name}</h2>
          <div className={cx("movie__text_row", "movie__text")}>
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
        <div className={styles.actors__block}>
          {data.persons.map((person: person) => (
            <div className={styles.actor__box} key={person.id}>
              <span>Актер: {person.name}</span>
              <img className={styles.actor__img} src={person.photo} alt={person.photo} />
              <span>Роль: {person.description}</span>
            </div>
          ))}
        </div>
      </div> );
}
 
export default MoviePageList;