import './dialogue.css'
import { response } from '../../constants/response'
import React, { useState, useEffect } from 'react';


export default function Dialogue({ chat }) {
  const [showFirstResponse, setShowFirstResponse] = useState(false);
  const [showSecondResponse, setShowSecondResponse] = useState(false);

  useEffect(() => {
    if (chat.length >= 1) {
      const firstTimer = setTimeout(() => {
        setShowFirstResponse(true);
      }, 500);

      return () => clearTimeout(firstTimer);
    }
  }, [chat]);

  useEffect(() => {
    if (showFirstResponse) {
      const secondTimer = setTimeout(() => {
        setShowSecondResponse(true);
      }, 2500);

      return () => clearTimeout(secondTimer);
    }
  }, [showFirstResponse]);




  return (
    <section className="dialogue-section">
      {chat.map((message, index) => (
        <div className='message-div' key={index}>
          <p className='label-message'> {message}</p>
        </div>
      ))}
      {showFirstResponse && (
        <>
          <div className="response-div">
            <p className='label-response'> {response[0].text}</p>
          </div>
          {showSecondResponse && (
            <div className="response-div">
              <p className='label-response'> {response[1].text}</p>
            </div>
          )}
        </>
      )}
    </section >
  )
}
