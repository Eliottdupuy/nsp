
import React from 'react';

const DocumentViewer = ({ pdfContent }) => {
  return (
    <div id="documentViewer" className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold mb-2">Document Viewer</h2>
      <div className="overflow-auto h-64">
        {pdfContent ? (
          <p className="text-sm">{pdfContent}</p>
        ) : (
          <p className="text-sm text-gray-500">No document uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;
