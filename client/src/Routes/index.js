import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PgAjuste from '../pages/PgAjuste';
import PgCarnet from '../pages/PgCarnet';
import PgFatura from '../pages/PgFatura';
import PgPessoa from '../pages/PgPessoa';
import SideBar from '../components/SideBar';

const Rotas = () => {
    return (
        <BrowserRouter>
            <SideBar/>
            <Routes>
                <Route exact path='/' element={<PgFatura/>}/>
                <Route exact path='/Carnet' element={<PgCarnet/>}/>
                <Route exact path='/Ajustes' element={<PgAjuste/>}/>
                <Route exact path='/Carnet' element={<PgCarnet/>}/>
                <Route exact path='/Pessoa' element={<PgPessoa/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;