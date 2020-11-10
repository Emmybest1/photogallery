import React from 'react';
import useFireStore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({
  setSelectedImg,
}: {
  setSelectedImg: React.Dispatch<string | null>;
}) => {
  const docs = useFireStore('images');

  const onClickHandler = (url: string) => {
    setSelectedImg(url);
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc: any) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            onClick={() => onClickHandler(doc.url)}
            whileHover={{ opacity: 1 }}
            layout
            style={{ cursor: "pointer" }}
          >
            <motion.img
              src={doc.url}
              alt="Upload Pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
