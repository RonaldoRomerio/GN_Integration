import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import InputMask from "react-input-mask";
export default function Input({nome, label, ...rest}) {
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
    <div className= "InputForm">
      <label>{label}</label>
      <InputMask ref={refInput} defaultValue={defaultValue} {...rest} />
      <span class="spanError">{error && error}</span>
    </div>
  );
}