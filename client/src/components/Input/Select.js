import { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

export default function Select({ nome, label, classe, children, ...rest }) {
    const selectRef = useRef(null);

    const { fieldName, defaultValue, registerField, error } = useField(nome);

    useEffect(() => {
        registerField({
        ref: selectRef,
        name: fieldName,
        getValue: ref => {
            return ref.current?.value
        },
        setValue: (ref, newValue) => {
            ref.current.value = newValue
        },
        clearValue: ref => {
            ref.current.value = ''
        },
        })
    }, [fieldName, registerField])

    return (
        <div className = {classe + " InputForm"}>
            <label htmlFor={fieldName}>{label}</label>
            <select ref={selectRef} id={fieldName} defaultValue={defaultValue} {...rest}>
                {children}
            </select>
            {error && <span className="error">{error}</span>}
        </div>
    )
}