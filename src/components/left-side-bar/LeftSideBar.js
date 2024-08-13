import './leftSideBar.css'
import { faqs } from '../../constants/faqs'

export default function LeftSideBar() {

  return (
    <>
      <section class="sidebar">
        <div class="logo-container">
          <img alt="logo" class="logo" src="/assets/logo.svg" />
          <h2 class="company-name">Sheer Solutions</h2>
        </div>
        <p class="solutions-text">FAQs:</p>
        <div class="faq-div">
          {faqs.map((faq) => {
            return (
              <ul className='faq-question'>
                {faq.question}
                <li className='faq-answer'>{faq.answer1}</li>
                <li className='faq-answer'>{faq.answer2}</li>
              </ul>
            )
          })}
        </div>
        <div className='collaborator-div'>
          <img src='./assets/joaoGomes.png' alt='Imagem do colaborador'></img>
          <h2 className='collaborator-name'>João Gomes</h2>
          <p className='collaborator-title'>Service Desk</p>
        </div>
      </section>
    </>
  )
}
