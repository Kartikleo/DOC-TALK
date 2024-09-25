import React from 'react';
import { useLocation } from 'react-router-dom';
import './PreviewPage.css';

const PreviewPage = () => {
  const location = useLocation();
  const { previewUrl, fileType } = location.state || {};

  if (!previewUrl) {
    return <div>No file selected for preview.</div>;
  }

  return (
    <div className="preview-page-container">
      <div className="preview-left">
       
        {fileType.startsWith('image/') && (
          <img src={previewUrl} alt="File Preview" className="preview-image" />
        )}
        {fileType === 'application/pdf' && (
          <iframe
            src={previewUrl}
            title="PDF Preview"
            className="preview-pdf"
            width="100%"
            height="500px"
          ></iframe>
        )}
      </div>
      <div className="preview-right">
        <textarea 
          className="input-field" 
          placeholder="Enter your text here..." 
        />
      </div>
    </div>
  );
};

export default PreviewPage;
