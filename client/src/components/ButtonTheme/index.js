import React from 'react';
import { BiSun, BiMoon } from "react-icons/bi";
import { Button } from './styled';
export default function ButtonTheme() {
  return (
    <div>
      <Button >
        <BiSun size={25} color='#D65A31'/>
      </Button>
      <Button>
        <BiMoon size={25}color='#D65A31'/>
      </Button>
    </div>
  );
}