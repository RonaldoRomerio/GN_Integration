import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
export default function SelectBasic({ nome, label, classe, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(nome);
    const customStyles = {
        select:{
            width: "10px"
        }
    }
    useEffect(() => {
        registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref) => {
            if (rest.isMulti) {
            if (!ref.state.value) {
                return [];
            }
            return ref.state.value.map((option) => option.value);
            }
            if (!ref.state.value) {
            return '';
            }
            return ref.state.value.value;
        },
        });
    }, [fieldName, registerField, rest.isMulti]);
    return (
        <div className= {classe + " InputForm"}>
            <label>{label}</label>
            <ReactSelect defaultValue={defaultValue} ref={selectRef} classNamePrefix="react-select" styles={customStyles} {...rest} />
            <span class="spanError">{error && error}</span>
        </div>
    );
};