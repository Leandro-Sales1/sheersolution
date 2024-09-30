import './dialogue.css';
import { response } from '../../constants/response';
import { useEffect, useState } from 'react';

export default function Dialogue({ questions }) {
  const [chat, setChat] = useState([]);


  useEffect(() => {
    if (questions.length > 0) {
      const lastQuestion = questions[questions.length - 1];
      setChat(prevChat => [...prevChat, lastQuestion]);
    }
  }, [questions]);

  useEffect(() => {
    const chatLastMessage = chat[chat.length - 1];
    if (chatLastMessage?.type === 'question') {

      const firstTimer = setTimeout(() => {
        setChat(prevChat => [...prevChat, response[0]]);
      }, 500);

      return () => clearTimeout(firstTimer);
    }
  }, [chat]);

  useEffect(() => {
    const chatLastMessage = chat[chat.length - 1];
    if (chatLastMessage?.type === 'response_1') {

      const secondTimer = setTimeout(() => {
        setChat(prevChat => [...prevChat, response[1]]);
      }, 2500);

      return () => clearTimeout(secondTimer);
    }
  }, [chat]);

  return (
    <section className="dialogue-section">
      {chat.map((message, index) => (
        <div key={index} className={message.type === 'question' ? 'message-div' : 'response-div'}>
          <p className={message.type === 'question' ? 'label-message' : 'label-response'}>
            {message.message}
          </p>
        </div>
      ))}
    </section>
  );
}
