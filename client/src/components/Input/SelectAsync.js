import { useRef, useEffect, useContext } from 'react';
import { useField } from '@unform/core';
import Select from 'react-select';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function SelectAsync({ nome, label, classe, children, ...rest }) {
    const selectRef = useRef(null);
    const {isDark} = useContext(ThemeContext)
    const { fieldName, defaultValue, registerField, error } = useField(nome);

    useEffect(() => {
        registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref) => {
            if (rest.isMulti) {
                if (!ref.state.value) {
                    return [];
                }
                return ref.state.value.map(option => option.value);
            }
            if (!ref.state.selectValue) {
                return '';
            }
            console.log(ref.state.selectValue[0].value)
            return ref.state.selectValue[0].value;
        }
        })
    }, [fieldName, registerField, rest.isMulti])
    return (
        <div className = {classe + " InputForm"}>
            <label htmlFor={fieldName}>{label}</label>
            <Select
                cacheOptions
                styles={styleSelect}
                defaultValue={defaultValue}
                ref={selectRef}
                isDark={isDark}
                {...rest}
            />
            {error && <span className="error">{error}</span>}
        </div>
    )
}

export const styleSelect = {
    container: (provided, state) => ({
        ...provided,
        border: `3px solid  ${state.selectProps.isDark ? '#FF971D' : '#D65A31'}`,
        borderRadius: '10px',
        height: '35px',
        width: '100%',
        background: `transparent`, 
        color: `${state.selectProps.isDark ? '#fff' : '#000'}`, 
    }),
    control: () => ({
        borderRadius: '10px',
        height: '30px',
    }),
    indicatorsContainer: () =>({
        display: 'none'
    }),
    placeholder: (provided, state) =>({
        ...provided,
        color: `${state.selectProps.isDark ? '#fff' : '#000'}`,
        height: '100%',
    }),
    menuList: (provided, state) => ({
        ...provided,
        background: `${state.selectProps.isDark ? '#332B2B' : '#EFEFEF'}`
    }),
    input: (provided, state) => ({
        ...provided,
        color: `${state.selectProps.isDark ? '#fff' : '#000'}`,
        height: '30px',
    }),
    option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? `${state.selectProps.isDark ? '#0000004d' : '#0000001a'}` : undefined
        }),
    singleValue: (provided, state) =>({
        ...provided,
        height: '100%',
        padding: '2px',
        color: `${state.selectProps.isDark ? '#fff' : '#000'}`,
    })
}