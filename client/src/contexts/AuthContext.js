import{createContext, useState, useEffect} from 'react';

export const AuthContext = createContext({});

export default function AuthProviderContext({children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function LoadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
            }}
        LoadStorage();
    },[])
    return(
        <AuthContext.Provider value={{signed: !!user}}>
            {children}
        </AuthContext.Provider>
    )
}