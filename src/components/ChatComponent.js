```javascript
import React, { useState, useEffect } from 'react';
import { sendQuery } from '../pages/api/chatbot';
import { userPreferences } from '../utils/userPreferences';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    const response = await sendQuery(message, userPreferences);
    setChatHistory([...chatHistory, { user: 'User', text: message }, { user: 'AI', text: response }]);
    setMessage('');
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="flex flex-col h-full">
      <div id="chatWindow" className="overflow-auto">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.user === 'User' ? 'text-right' : 'text-left'}>
            <p><strong>{chat.user}:</strong> {chat.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-auto flex">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="flex-grow border rounded p-2"
          placeholder="Type your message here..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white rounded p-2 ml-2">Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
```