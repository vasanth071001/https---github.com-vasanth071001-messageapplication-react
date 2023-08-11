import React, { useState } from 'react';

const Chatgpt = ({ userMessage, apiKey }) => {
    console.log({userMessage,apiKey},"coming");
  const [response, setResponse] = useState('');

  const apiEndpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  const prompt = 'You are a helpful assistant.\nUser:';

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          messages: [{ role: 'system', content: prompt }, { role: 'user', content: userMessage }],
          max_tokens: 50 // Adjust the response length as needed
        })
      });

      const responseData = await response.json();
      const chatResponse = responseData.choices[0].message.content;
      setResponse(chatResponse);
      console.log('Full API Response:', responseData);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
       
      </div>
      <div>
        <p>User Message: {userMessage}</p>
        <p>ChatGPT Response: {response}</p>
      </div>
    </div>
  );
}

export default Chatgpt;
