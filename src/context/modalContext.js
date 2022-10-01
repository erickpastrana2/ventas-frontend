import React, { createContext, useState } from 'react';

export const ModalContex = createContext();

export const ModalContextProvider = props => {
    
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');

    return(
        <ModalContex.Provider
            value={{
                showModal,
                modalTitle,

                setShowModal,
                setModalTitle
            }}
        >
            {props.children}
        </ModalContex.Provider>
    )
}