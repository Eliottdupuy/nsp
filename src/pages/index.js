```javascript
import React from 'react';
import UploadComponent from '../components/UploadComponent';
import ChatComponent from '../components/ChatComponent';
import DocumentViewerComponent from '../components/DocumentViewerComponent';
import SettingsComponent from '../components/SettingsComponent';
import '../styles/index.css';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">AI-Powered Document Interaction Application</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <UploadComponent />
          <SettingsComponent />
        </div>
        <div className="col-span-2">
          <ChatComponent />
          <DocumentViewerComponent />
        </div>
      </div>
    </div>
  );
}
```