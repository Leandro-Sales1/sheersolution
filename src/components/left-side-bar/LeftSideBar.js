import './leftSideBar.css'
import { faqs } from '../../constants/faqs'

export default function LeftSideBar() {

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img alt="logo" className="logo" src="/assets/logo.svg" />
          <h2 className="company-name">Sheer Solutions</h2>
        </div>
        <p className="solutions-text">FAQ:</p>
        <div className="faq-div">
          {faqs.map((faq, index) => {
            return (
              <ul key={index} className='faq-question'>
                {faq.question}
                <li key={faq.answer1} className='faq-answer'>{faq.answer1}</li>
                <li key={faq.answer2} className='faq-answer'>{faq.answer2}</li>
              </ul>
            )
          })}
        </div>
        <div className='collaborator-div'>
          <img className='collaborator-img' src='./assets/joaoGomes.png' alt='Imagem do colaborador'></img>
          <h2 className='collaborator-name'>João Gomes</h2>
          <p className='collaborator-title'>Service Desk</p>
        </div>
      </section>
    </>
  )
}
