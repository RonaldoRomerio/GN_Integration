import{createContext, useState, useEffect} from 'react';
import Swal from 'sweetalert2'

//APIContext
export const SwalContext = createContext({});

function SwalProviderContext({children}){

    function swalToast(situacao, mensagem){
        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }).fire({
            icon: situacao,
            title: mensagem
        })
    }
    function swalConfirm(texto, tituloConfirmar, textoConfirmar){
        Swal.fire({
            title: 'Deseja realmente fazer isso ?',
            text: texto,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    tituloConfirmar,
                    textoConfirmar,
                    'success'
                )
            }
        })
    }
    function swalAlert(texto){
        Swal.fire(texto)
    }
    return(
        <SwalContext.Provider 
        value={{
            swalConfirm,
            swalToast,
            swalAlert
        }}>
            {children}
        </SwalContext.Provider>
    )
}

export default SwalProviderContext;