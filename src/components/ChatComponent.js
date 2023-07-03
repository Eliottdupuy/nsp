```javascript
import React, { useState } from 'react';
import { openaiService } from '../services/openaiService';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    const response = await openaiService.sendQuery(message);
    setChatHistory([...chatHistory, { user: 'User', text: message }, { user: 'AI', text: response }]);
    setMessage('');
  };

  return (
    <div id="chatWindow" className="chat-window">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.user === 'AI' ? 'ai-message' : 'user-message'}`}>
            <strong>{chat.user}:</strong> {chat.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" value={message} onChange={handleInputChange} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
```