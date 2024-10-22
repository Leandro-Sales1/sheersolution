import { useState } from "react";
import { LuSend } from "react-icons/lu";
import './content.css';
import Dialogue from "../dialogue-area/Dialogue";
import api from "../../api/api";
import { useRecoilState } from "recoil";
import { chatState } from "../../states/chatState";
import { IMessage } from "../../interfaces/chat";
import { v4 as uuid } from 'uuid';
import geminiApi from "../../api/geminiApi";


export default function Content() {
  const [value, setValue] = useState('');
  const [chat, setChat] = useRecoilState(chatState);



  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    postQuestion();
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      postQuestion();
    }
  }

  function updateMessages(newMessage: IMessage) {
    setChat((prevChat) => ({
      ...prevChat,
      messages: [...prevChat.messages, newMessage],
    }));
  }

  async function postQuestion() {
    try {
      //storing the question in messages 
      const question = await api.post('messages', {
        chatId: chat.id,
        senderType: "USER",
        content: value,
      });

      //update the state with the user massage
      updateMessages(question.data)

      //getting the answer by task
      const answer = await api.get(`tasks/search?searchTerm=${value}`)
      updateMessages({
        content: 'Segundo o banco de dados da sua empresa, essas são as possíveis respostas para sua dúvida:'
          + answer.data,
        id: uuid(),
        senderType: "ASSISTANT",
        timestamp: new Date().toISOString()
      })

      //getting the answer by Gemini
      const geminiAnswer = await geminiApi.post(
        value
      )
      updateMessages({
        content: 'Segundo o nosso assistente, essas são as possíveis respostas para sua dúvida:'
          + geminiAnswer.data,
        id: uuid(),
        senderType: "ASSISTANT",
        timestamp: new Date().toISOString()
      })

    } catch (error) {
      console.error("Erro ao buscar os dados da API:", error);
    }
    setValue('');
  }

  return (
    <main className="main-container">
      <Dialogue />
      <div className="form-wrapper">
        <form className="form-container" onSubmit={handleForm}>
          <textarea
            placeholder="Digite sua pergunta..."
            value={value}
            rows={10}
            cols={50}
            wrap="soft"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input-field"
          ></textarea>
          <button type="submit" className="submit-button">
            <LuSend className="icon" />
          </button>
        </form>
      </div>
    </main>
  );
}
