import React, { useState } from 'react';
import Modal from '../components/modal/modal.component';
import ImageGrid from '../components/image-grid/image-grid.component';
import UploadImage from '../components/upload-form/upload-form.component';

const HomePage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
    <main className="main">
      <UploadImage />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </main>
  );
};

export default HomePage;
