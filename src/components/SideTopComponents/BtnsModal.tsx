import Modal from 'react-modal';
import { motion, AnimatePresence } from 'framer-motion';
import ModalBtn from '../Buttons/ModalBtn';
import useModal from '../../hooks/UseModal';
import AddClass from '../AddClass';
import AddStudent from '../AddStudent'; // Import AddStudent component

Modal.setAppElement('#root');

const BtnsModal = () => {
    const { modalIsOpen, openModal, closeModal, modalContent } = useModal();

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <div>
            <ModalBtn text={'add'} onClick={() => openModal('add')} />
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                closeTimeoutMS={400}
            >
                <AnimatePresence>
                    {modalIsOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-6 rounded shadow-lg max-w-md w-full"
                        >
                            <div className='flex flex-col items-center'>
                                {modalContent === 'add' && (
                                    <>
                                        <h2 className="w-full text-2xl font-bold mb-4">Add element</h2>
                                        <p className="w-full mb-4">This is part for add element</p>
                                        <div className='flex gap-3'>
                                            <ModalBtn onClick={() => openModal('student')} text={'Add Student'} />
                                            <ModalBtn onClick={() => openModal('class')} text={'Add Class'} />
                                        </div>
                                    </>
                                )}
                                {modalContent === 'class' && <AddClass />}
                                {modalContent === 'student' && <AddStudent />}
                                <button
                                    onClick={closeModal}
                                    className="px-4 mt-2 py-2 bg-slate-300 font-bold text-slate-800 rounded"
                                >
                                    Close Modal
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Modal>
        </div>
    );
};

export default BtnsModal;
