import React, {createContext, useState, useEffect} from 'react';
import {autenticar, api} from '../services/API'

export const AuthContext = createContext({});

export default function AuthProviderContext({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function LoadStorage(){
            const storageUser = sessionStorage.getItem('user');
            const StorageToken = sessionStorage.getItem('token');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                api.defaults.headers.common['authorization'] = `Bearer ${StorageToken}`
            }}
        LoadStorage();
    },[])

    async function login(login, senha){
        autenticar
        .post('/', {login, senha})
        .then((response) => {
            const loggedUser = response.data.user;
            const token = response.data.token;

            sessionStorage.setItem("user", JSON.stringify(loggedUser))
            sessionStorage.setItem("token", token);

            api.defaults.headers.common['authorization'] = `Bearer ${token}`

            setUser(loggedUser);
        })
        .catch((err) => {
            console.error("Usuário ou senha incorretos: " + err);
        });
    }

    async function logout(){
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        api.defaults.headers.common['authorization'] = null
        setUser = null
    }
    return(
        <AuthContext.Provider value={{signed: !!user, user, loadingAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}