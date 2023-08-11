import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Chatwithme</h2>
      <p className="about-text">Welcome to Chatwithme, a versatile chat application that brings you various features in one place!</p>
      <p className="about-text">Our goal is to provide you with a seamless and interactive chatting experience with a range of capabilities:</p>
      <ul className="about-list">
        <li><strong>Chat with AI:</strong> Engage in conversations with our AI-powered chatbot, powered by GPT-3, which can provide intelligent responses on various topics.</li>
        <li><strong>Quick Search:</strong> Use our integrated Google search functionality to find information, articles, and more right from the chat interface.</li>
        <li><strong>Image Search:</strong> Looking for images? Utilize our Google image search feature to find visual content without leaving the app.</li>
      </ul>
      <p className="about-text">Whether you're seeking information, engaging in casual conversation, or simply exploring the capabilities of AI, Chatwithme has something for everyone.</p>
      <p className="about-text">Feel free to start a conversation and explore the different options available to you. We're excited to have you here!</p>
      <p className="about-text">If you have any feedback or suggestions, please don't hesitate to reach out to us. Happy chatting!</p>
    </div>
  );
}

export default About;
