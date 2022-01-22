import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import InputMask from "react-input-mask";
export default function Input({nome, classe, label, ...rest}) {
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
    <div className={classe}>
      <label>{label}</label>
      <InputMask ref={refInput} defaultValue={defaultValue} {...rest} />
      <span>{error && error}</span>
    </div>
  );
}