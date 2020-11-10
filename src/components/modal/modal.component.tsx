import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({
  selectedImg,
  setSelectedImg,
}: {
  selectedImg: string;
  setSelectedImg: React.Dispatch<string | null>;
}) => {
  const onClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as HTMLDivElement).classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={onClickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};
export default Modal;
