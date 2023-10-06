import { Form } from "react-bootstrap";
import style from './FindInput.module.css'
 interface FindInputProps {
    setMovieName: React.Dispatch<React.SetStateAction<string>>
 }
const FindInput = ({setMovieName}:FindInputProps) => {
    return ( <Form.Control onChange={(event)=>setMovieName(event.target.value)} className={style.input} type="text" placeholder="Название фльма" /> );
}
 
export default FindInput;