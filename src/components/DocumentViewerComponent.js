```javascript
import React, { useState, useEffect } from 'react';

const DocumentViewerComponent = ({ document }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (document) {
      // Assuming document is a Blob object
      const reader = new FileReader();
      reader.onload = function(event) {
        setContent(event.target.result);
      };
      reader.readAsText(document);
    }
  }, [document]);

  return (
    <div id="documentViewer" className="w-full h-full overflow-auto p-4">
      <pre className="whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

export default DocumentViewerComponent;
```