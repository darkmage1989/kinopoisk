import MoviesPage from "../../components/MoviesPage/MoviesPage";
import style from './Main.module.css'
const Main = () => {
  return ( <main className={style.main}>
    <h1 style={{marginTop: '60px'}}>Что посмотреть</h1>
    <MoviesPage/>
    </main> );
}
export default Main;