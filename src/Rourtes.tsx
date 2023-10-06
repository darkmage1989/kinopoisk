import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";
import MoviePage from './pages/MoviePage/MoviePage'


const AppRoutes = () => {
    return ( <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="moviePage/:id" element={<MoviePage/>}/>
        </Routes>
        </BrowserRouter> );
}
 
export default AppRoutes;