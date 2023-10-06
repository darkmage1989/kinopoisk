import { useState } from "react";
import FindInput from "../../components/FindInput/FindInput";
import MoviesPage from "../../components/MoviesList/MoviesList";
import style from './Main.module.css'
const Main = () => {
  const [movieName, setMovieName] = useState('')
  return ( <main className={style.main}>
    <h1 style={{marginTop: '60px'}}>Что посмотреть</h1>
    <FindInput setMovieName={setMovieName}/>
    <MoviesPage movieName={movieName}/>
    </main> );
    
}
export default Main;