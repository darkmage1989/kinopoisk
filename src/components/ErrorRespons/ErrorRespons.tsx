import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

interface ErrorResponsProps {
    message: string
}
 
const ErrorRespons = ({message}:ErrorResponsProps) => {
    const [show, setShow] = useState(true);
    return ( <><Alert show={show} variant="danger">
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
  {!show && <Button onClick={() => setShow(true)}>Показать текст ошибки</Button>}</> );
}
 
export default ErrorRespons;