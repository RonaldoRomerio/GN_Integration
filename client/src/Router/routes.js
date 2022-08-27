import { useContext } from 'react';
import {Route, Navigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

//components
import Login from '../pages/Login';

export default function AuthRoute({component: Component}){

    const{signed} = useContext(AuthContext);

    const loading = false;
    if(loading){
        return(
            <div></div>
        )
    }
    if(!signed)
        return <Login/>
    if(signed)
        return Component
}