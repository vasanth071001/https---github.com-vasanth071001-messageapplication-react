import React, { useState } from 'react';
import './chat.css';
import userpic from './images/usericon.png';
import Chatgpt from './Chatgpt'; // Make sure to adjust the path

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageBackgroundColor, setMessageBackgroundColor] = useState('#f5f5f5'); // Default color
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, type: 'user' }]);
      setMessage('');
    }
  };

  const colorOptions = ['#f5f5f5', '#ffffff', '#f0f0f0', '#d3e0ea', '#ffc107'];

  const handleColorSelection = (color) => {
    setMessageBackgroundColor(color);
    setShowColorPicker(false);
  };

  return (
    <div className="chat-container">
      <div className="color-picker">
        <div className="color-circle" style={{ backgroundColor: messageBackgroundColor }} onClick={() => setShowColorPicker(!showColorPicker)} />
        {showColorPicker && (
          <div className="color-options">
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(color)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div className={`message ${msg.type}`} key={index} style={{ backgroundColor: messageBackgroundColor }}>
            {msg.type === 'user' && <img className="user-pic" src={userpic} alt="User" />}
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-box-container">
        <div className="input-box">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
      {/* Include Chatgpt component */}
      <Chatgpt userMessage={message} apiKey="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" />
    </div>
  );
};
 
export default Chat;
