import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
// import { LuSticker } from "react-icons/lu";
import { IoDocumentAttach, IoSend } from "react-icons/io5";
import './App.css';
import MessageService, { IMessage } from '../../services/message.service';
import { generateId } from '../../utils';
import { useState } from 'react';

function App() {
  const [inputMessage, setInputMessage] = useState<string>('');
  const messageService = new MessageService();

  function sendMessage() {
    const text: string = inputMessage;
    const messageId: string = generateId();

    const message: IMessage = {
      id: messageId,
      text,
      createdAt: new Date(),
      user: "userId",
      isAuthor: true,
      isFirstMessage: false,
    };

    messageService.createMessage(message)
    console.log('Enviando mensagem...', message);

    setInputMessage('');
  }
  return (
    <>
      <div className="app-container">
        <div className="nav-side-wrapper">
          <Sidebar />
          <div className="nav-app-wrapper">
            <Navbar />
            <div className="messages-wrapper">
              <div className="messages-container">
                <div className="message-reverse first-message">
                  <div className="message-content">
                    <div className="message-text">
                      <p>Olá, tudo bem?</p>
                    </div>
                    <div className="message-time">
                      <p>12:00</p>
                    </div>
                  </div>
                </div>
                <div className="message-normal first-message">
                  <div className="message-content">
                    <div className="message-text">
                      <p>Olá, tudo bem?</p>
                    </div>
                    <div className="message-time">
                      <p>12:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-input-container">
                <div className="message-input">
                  <div className="message-input-icons">
                    <div className="message-input-icon">
                      <MdOutlineEmojiEmotions size="30" color='#8696a0' />
                    </div>
                    <div className="message-input-icon">
                      <IoDocumentAttach size="28" color='#8696a0' />
                    </div>
                  </div>
                  <input className="input-message" 
                  value={inputMessage} 
                  onChange={(e) => setInputMessage(e.target.value)} 
                  type="text" 
                  placeholder="Digite uma mensagem..." 
                  onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }}/>
                  <div className="send-button" onClick={sendMessage}>
                    <IoSend size="30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App