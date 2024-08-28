import { useState } from "react";
import { LuSend } from "react-icons/lu";
import './content.css';
import Dialogue from "../dialogue-area/Dialogue";
import { questions as initialQuestions } from "../../constants/questions";

export default function Content() {
  const [value, setValue] = useState('');
  const [questions, setQuestions] = useState([...initialQuestions]);

  function handleForm(e) {
    e.preventDefault();
    if (value.trim()) {
      setQuestions(prevQuestions => [...prevQuestions, { message: value, type: 'question' }]);
      setValue('');
    }
  }

  return (
    <main className="main-container">
      <Dialogue questions={questions} />
      <div className="form-wrapper">
        <form className="form-container" onSubmit={handleForm}>
          <textarea
            placeholder="Digite sua pergunta..."
            value={value}
            rows={10}
            cols={50}
            wrap="soft"
            onChange={(e) => setValue(e.target.value)}
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
