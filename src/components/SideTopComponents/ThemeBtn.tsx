import { motion } from 'framer-motion';
import { WiMoonAltWaningCrescent2, WiMoonAltWaxingCrescent6 } from 'react-icons/wi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../context/store'; // Adjust the import path as needed
import { handleTheme } from '../../context/action/ThemeAction';
export default function ThemeBtn() {
  const dispatch = useDispatch<AppDispatch>();
  const isSelected = useSelector((state: RootState) => state.theme.value);
  const handleClick = () => {
    dispatch(handleTheme());
  };
  return (
    <motion.div
      className="cursor-pointer text-xl"
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      {isSelected ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <WiMoonAltWaningCrescent2 size={36} />
        </motion.div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <WiMoonAltWaxingCrescent6 size={36} />
        </motion.div>
      )}
    </motion.div>
  );
}
