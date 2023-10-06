import { useGetPostsApiQuery } from "../../redux/apis/apis";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "../Movie/Movie";
import ErrorRespons from "../ErrorRespons/ErrorRespons";
import Loading from "../Loading/Loading";
import { Alert } from "react-bootstrap";
interface MoviesPageProps {
  movieName:string
}
const MoviesPage = ({movieName}:MoviesPageProps) => {
    
    const { data, error, isLoading } = useGetPostsApiQuery({ // получаю данные из запроса 
        movieName, // передаю параметры в запрос
      });
      const isEmptyList = !isLoading && !data; // обработка загрузки
      if (isLoading) {
        return (
          <Loading/>
        );
      }
      if (error) { // обработка ошибки
        if ("status" in error) {
          const message =
            "error" in error ? error.error : JSON.stringify(error.data);
          return (
            <>
            <ErrorRespons message={message}/>
          </>
          );
        } else {
          return <div>{error.message}</div>;
        }
      }
      if (isEmptyList) { //обработка пустого списка 
        return <Alert variant="warning">
        Я ничего не нашел, попробуем другой фильм?
      </Alert>;
      }
      return (
        <div><Movie data = {data.docs}/></div>
      )
}
export default MoviesPage;