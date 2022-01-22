import{createContext, useState, useEffect} from 'react';
import {darkTheme, LightTheme} from '../styles/theme';
import {ThemeProvider} from 'styled-components';

//APIContext
export const ThemeContext = createContext({});

function ThemeProviderContext({children}){
    const [isDark, setIsDark] = useState(false);
    const [theme, setTheme] = useState(LightTheme);

    useEffect(() =>{
        async function loadStorage(){
            const storagetheme = localStorage.getItem('isDark');
            if(storagetheme){
                setIsDark(JSON.parse(storagetheme));
                if(JSON.parse(storagetheme)){ setTheme(darkTheme);}
                else{setTheme(LightTheme);}
            }
        }
        loadStorage();
    }, [])
    function tonggleTheme(){
        if(isDark){
            setIsDark(false);
            setTheme(LightTheme);
            storageTheme(false);
            console.log(isDark)
        } else {
            setIsDark(true);
            setTheme(darkTheme);
            storageTheme(true);
            console.log(isDark)
        }
    }
    function storageTheme(data){
        console.log("dado", JSON.stringify(data));
        localStorage.setItem('isDark', JSON.stringify(data));
    }
    return(
        <ThemeContext.Provider 
        value={{
            isDark,
            tonggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProviderContext;