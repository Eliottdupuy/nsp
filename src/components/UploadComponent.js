import React, { useState } from 'react';
import { parsePDF } from '../utils/pdfParser';

const UploadComponent = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const parsedText = await parsePDF(file);
      setMessage('uploadSuccess');
      // You can now use the parsedText for further processing
    } catch (error) {
      setMessage('uploadFailure');
    }
  };

  return (
    <div>
      <input type="file" id="uploadButton" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default UploadComponent;