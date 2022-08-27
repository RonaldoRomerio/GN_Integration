import {BrowserRouter, Routes as Switch, Route} from 'react-router-dom';
import AuthRoute from './routes'

//pages
import PgAjuste from '../pages/PgAjuste';
import PgCarnet from '../pages/PgCarnet';
import PgFatura from '../pages/PgFatura';
import PgPessoa from '../pages/PgPessoa';
import SideBar from '../components/SideBar';


export default function Router(){
    return(
        <BrowserRouter>
            <SideBar/>
            <Switch>
                <Route exact path='/' element={<AuthRoute component = {<PgFatura/>}/>} />
                <Route exact path='/Carnet' element={<AuthRoute component = {<PgCarnet/>}/>}/>
                <Route exact path='/Ajustes' element={<AuthRoute component = {<PgAjuste/>}/>}/>
                <Route exact path='/Carnet' element={<AuthRoute component = {<PgCarnet/>}/>}/>
                <Route exact path='/Pessoa' element={<AuthRoute component = {<PgPessoa/>}/>}/>
            </Switch>
        </BrowserRouter>
    )
}