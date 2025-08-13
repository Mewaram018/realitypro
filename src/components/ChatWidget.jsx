// src/components/ChatWidget.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you with your property needs?", sender: 'bot', time: '10:30 AM' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "I want to buy a property",
    "I want to sell my property", 
    "Looking for rental options",
    "Need property valuation"
  ];

  const sendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      text: text,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thank you for your interest! Our agent will contact you shortly. You can also call us at +91 98765 43210.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        style={styles.chatToggle}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={styles.chatWindow}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
          >
            {/* Chat Header */}
            <div style={styles.chatHeader}>
              <div style={styles.agentInfo}>
                <div style={styles.agentAvatar}>👨‍💼</div>
                <div>
                  <div style={styles.agentName}>RealtyPro Support</div>
                  <div style={styles.agentStatus}>● Online</div>
                </div>
              </div>
              <button style={styles.minimizeBtn} onClick={() => setIsOpen(false)}>
                ‒
              </button>
            </div>

            {/* Messages Area */}
            <div style={styles.messagesArea}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    ...styles.message,
                    ...(message.sender === 'user' ? styles.userMessage : styles.botMessage)
                  }}
                >
                  <div style={styles.messageText}>{message.text}</div>
                  <div style={styles.messageTime}>{message.time}</div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div style={styles.quickReplies}>
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  style={styles.quickReply}
                  onClick={() => sendMessage(reply)}
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} style={styles.inputArea}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                style={styles.messageInput}
              />
              <button type="submit" style={styles.sendBtn}>
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const styles = {
  chatToggle: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chatWindow: {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '350px',
    height: '500px',
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  chatHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  },
  agentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem'
  },
  agentAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem'
  },
  agentName: {
    fontWeight: '600',
    fontSize: '1rem'
  },
  agentStatus: {
    fontSize: '0.8rem',
    opacity: 0.9
  },
  minimizeBtn: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.2rem 0.5rem'
  },
  messagesArea: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  message: {
    maxWidth: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem'
  },
  userMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end'
  },
  botMessage: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start'
  },
  messageText: {
    padding: '0.8rem 1rem',
    borderRadius: '15px',
    fontSize: '0.9rem',
    lineHeight: '1.4'
  },
  messageTime: {
    fontSize: '0.7rem',
    color: '#999',
    padding: '0 0.5rem'
  },
  quickReplies: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    borderTop: '1px solid #eee'
  },
  quickReply: {
    background: '#f8f9fa',
    border: '1px solid #e1e8ed',
    padding: '0.6rem 1rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'left'
  },
  inputArea: {
    display: 'flex',
    padding: '1rem',
    borderTop: '1px solid #eee',
    gap: '0.5rem'
  },
  messageInput: {
    flex: 1,
    padding: '0.8rem',
    border: '1px solid #e1e8ed',
    borderRadius: '20px',
    outline: 'none',
    fontSize: '0.9rem'
  },
  sendBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

// Add dynamic styles for user and bot messages
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .user-message .message-text {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .bot-message .message-text {
      background: #f1f3f4;
      color: #333;
    }
    .quick-reply:hover {
      background: #e8f4f8;
      border-color: #667eea;
    }
  `;
  document.head.appendChild(style);
}

export default ChatWidget;
