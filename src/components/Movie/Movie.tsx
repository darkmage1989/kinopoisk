import { url } from "inspector";
import { data } from "../../interfaces/dataInterface";
import style from './Movie.module.css'

interface MovieProps {
    data: Array<data>
}

const Movie = ({ data }: MovieProps) => {
    
  return <div className={style.movie__box}>
    {data.map((movie)=> (
        <div key={movie.id}>
            {movie.poster ? <img className={style.poster} src={movie.poster} alt={movie.poster} /> : null}
            
        </div>
    ))}
  </div>
};

export default Movie;
