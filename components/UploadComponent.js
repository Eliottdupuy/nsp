
import { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append('File', selectedFile);

    try {
      const response = await axios.post('/api/upload', formData);
      if (response.data.success) {
        alert('File uploaded successfully');
      } else {
        alert('Failed to upload file');
      }
    } catch (error) {
      console.error('Error while uploading file', error);
    }
  };

  return (
    <div className="upload-component">
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
    </div>
  );
};

export default UploadComponent;
