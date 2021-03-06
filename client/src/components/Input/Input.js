import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import InputMask from "react-input-mask";
export default function Input({nome, label, classe, tipo, ...rest}) {
  const refInput = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(nome)
  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: refInput.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  return (
    (tipo == "hidden" ? 
      <InputMask ref={refInput} defaultValue={defaultValue} type="hidden" {...rest} />
    :
    <div className= {classe + " InputForm"}>
      <label>{label}</label>
      <InputMask ref={refInput} defaultValue={defaultValue} {...rest} />
      <span className="spanError">{error && error}</span>
    </div>
    )
  );
}