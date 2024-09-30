import './dialogue.css';
import { useEffect } from 'react';
import api from '../../api/api';
import { useRecoilState } from 'recoil';
import { chatState } from '../../states/chatState';

export default function Dialogue() {
  const [chat, setChat] = useRecoilState(chatState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const createChat = await api.post('chat/createChat', {
          employeeId: "123e4567-e89b-12d3-a456-426614174000",
          startTimestamp: "2024-08-17T12:00:00",
          status: "ACTIVE"
        });
        setChat(createChat.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };
    fetchData();
  }, [setChat]);

  return (
    <section className="dialogue-section">
      {chat.messages.map((message, index) => (
        <div key={index} className={message.senderType === 'USER' ? 'message-div' : 'response-div'}>
          <p className={message.senderType === 'USER' ? 'label-message' : 'label-response'}>
            {message.content.split(/(:|\.)/g).map((part, index) => (
              <span key={index}>
                {part}
                {(part === ':' || part === '.') && <br />}
              </span>
            ))}
          </p>
        </div>
      ))}
    </section>
  );
}
