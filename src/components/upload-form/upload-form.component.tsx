import React, { useState } from 'react';
import ProgressBar from '../progress-bar/progress-bar.component';

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const types = ['image/png', 'image/jpeg'];

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files![0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setError('Please select an image file (png or jpeg)');
    }
  };
  return (
    <form>
      <label className="input-wrapper">
        <input
          type="file"
          onChange={onChangeHandler}
          aria-label="Upload Photo"
        />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      {file != null && <div>{file.name}</div>}
      {file != null && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
