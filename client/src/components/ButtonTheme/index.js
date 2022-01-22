import React, { useContext } from 'react';
import { BiSun, BiMoon } from "react-icons/bi";
import { Button } from './styled';
import { ThemeContext } from '../../contexts/ThemeContext';
export default function ButtonTheme() {

  const{isDark, tonggleTheme} = useContext(ThemeContext);
  if(isDark){
    return (
      <div>
        <Button onClick={(() => tonggleTheme())}>
          <BiSun size={25} color='#D65A31'/>
        </Button>
      </div>
    );
  }else{
    return (
      <div>
        <Button onClick={(() => tonggleTheme())}>
          <BiMoon size={25}color='#D65A31'/>
        </Button>
      </div>
    );
  }

}