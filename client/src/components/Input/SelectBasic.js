import React, { useRef, useEffect, useContext } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function SelectBasic({ nome, label, classe, ...rest }) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(nome);
    const{isDark, tonggleTheme} = useContext(ThemeContext);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: (isDark ? '#393E46' : '#EFEFEF'),
        }),
        control: () => ({
            backgroundColor: (isDark ? '#393E46' : '#EFEFEF'),
            border: `3px solid ${(isDark ? '#FF971D' : '#D65A31')}`,
            width:'100%',
            display: 'flex',
            height: '35px',
            borderRadius: '5px'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: (isDark ? '#FF971D' : '#D65A31'),
            backgroundColor: (isDark ? '#393E46' : '#EFEFEF'),
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: (isDark ? '#FF971D' : '#D65A31'),
        })
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
            <span className="spanError">{error && error}</span>
        </div>
    );
};