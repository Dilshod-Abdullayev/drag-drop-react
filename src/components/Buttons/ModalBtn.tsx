// ModalBtn.js
import { motion } from 'framer-motion';
import { IoAddCircleSharp } from 'react-icons/io5';

const ModalBtn = ({ onClick, text }: { onClick: () => void; text: string }) => {
    return (
        <motion.button
            initial={{ opacity: 0.6 }}
            whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
            onClick={onClick}
            className="flex items-center text-xl font-normal p-1 bg-slate-800 rounded-xl text-white px-4"
        >
            {text} <IoAddCircleSharp />
        </motion.button>
    );
};

export default ModalBtn;
