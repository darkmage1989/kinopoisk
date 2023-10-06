import { useState } from "react";
import React from 'react'
import { useGetPostsApiQuery } from "../../redux/apis/apis";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner, Alert } from "react-bootstrap";
import Movie from "../Movie/Movie";
interface MoviesPageProps {
  movieName:string
}
const MoviesPage = ({movieName}:MoviesPageProps) => {
    const [show, setShow] = useState(true);
    const { data, error, isLoading } = useGetPostsApiQuery({ // получаю данные из запроса 
        movieName, // передаю параметры в запрос
      });
      const isEmptyList = !isLoading && !data; // обработка загрузки
      if (isLoading) {
        return (
          <Button variant="primary" disabled>
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
      if (error) { // обработка ошибки
        if ("status" in error) {
          const message =
            "error" in error ? error.error : JSON.stringify(error.data);
          return (
            <>
            <Alert show={show} variant="danger">
              <Alert.Heading>Ошибка</Alert.Heading>
              <p>
                {message}
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setShow(false)} variant="outline-success">
                  Скрыть
                </Button>
              </div>
            </Alert>
            {!show && <Button onClick={() => setShow(true)}>Показать текст ошибки</Button>}
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