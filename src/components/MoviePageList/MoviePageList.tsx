
import { movie, person } from '../../interfaces/dataInterface';
import styles from './MoviePageList.module.css'
import classNames from "classnames/bind";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
let cx = classNames.bind(styles);
interface MoviePageListProps {
    data: movie
}
 
const MoviePageList = ({data}:MoviePageListProps) => {
  const navigate = useNavigate()
    return ( <div className={styles.movie__box}>
        <div>
          <h2 className={styles.movie__title}>Название: {data.name? data.name : 'Без названия'}</h2>
          
          <div className={cx("movie__text_row", "movie__text")}>
            <span>Cборы в мире: {data.fees.world.value?data.fees.world.value: '0'} $</span>
            <span>Рейтинг: {data.rating.kp.toFixed(1)}</span>
          </div>
          <span>Описание: {data.shortDescription?data.shortDescription: 'Нет описания('}</span>
        </div>
        <img
          className={styles.img__movie}
          src={data.backdrop.url ? data.backdrop.url: '/images/no-image.jpg'}
          alt={data.backdrop.url}
        />
        <div className={styles.movie__text}>
          <span>Подробное описание: {data.description?data.description: 'Нет описания('}</span>
        </div>
        <Button onClick={()=> {navigate('/')}} variant="primary">На главную</Button>{' '}
        <div className={styles.actors__block}>
          {data.persons.map((person: person) => (
            <div className={styles.actor__box} key={person.id}>
              <span>{person.name? person.name: 'Не указан в титрах'}</span>
              <img className={styles.actor__img} src={person.photo} alt={person.photo} />
              <span >{person.description? person.description : 'Не указан в титрах'}</span>
            </div>
          ))}
        </div>
      </div> );
}
 
export default MoviePageList;