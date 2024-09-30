import './leftSideBar.css'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { faqs } from '../../constants/faqs'
import { useState } from 'react';

export default function LeftSideBar() {
  const [isFAQOpen, setIsFAQOpen] = useState(true)

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img alt="logo" className="logo" src="/assets/logo.svg" />
          <h2 className="company-name">Sheer Solutions</h2>
        </div>
        <div className='faq-menu'>
          <p className="solutions-text">FAQ:</p>
          <button className="faq-button" onClick={() => setIsFAQOpen(!isFAQOpen)}>
            {isFAQOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
        <div className="faq-div">
          {isFAQOpen &&
            faqs.map((faq, index) => {
              return (
                <ul key={index} className='faq-question'>
                  {faq.question}
                  <li key={faq.answer1} className='faq-answer'>{faq.answer1}</li>
                  <li key={faq.answer2} className='faq-answer'>{faq.answer2}</li>
                </ul>
              )
            })}
        </div>
        <div className={`collaborator-div ${!isFAQOpen ? 'faq-closed' : ''}`}>
          <img className='collaborator-img' src='./assets/joaoGomes.png' alt='Imagem do colaborador'></img>
          <h2 className='collaborator-name'>João Gomes</h2>
          <p className='collaborator-title'>Service Desk</p>
        </div>
      </section>
    </>
  )
}
