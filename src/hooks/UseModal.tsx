import { useState } from 'react';

const useModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content: any) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };

    return {
        modalIsOpen,
        openModal,
        closeModal,
        modalContent,
    };
};

export default useModal;
