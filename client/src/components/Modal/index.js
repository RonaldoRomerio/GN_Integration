import React from 'react';
import {DivModal, ButtonClose} from './styled.js'
import {BiExit} from 'react-icons/bi'
export default function Modal({children, statusModal}) {
    return (
    <DivModal>
        <div className='containerModal'>
            <ButtonClose onClick={() => statusModal()}><BiExit size={28}/></ButtonClose>
            {children}
        </div>
    </DivModal>
    );
}