import React from 'react'
import '../styles/pages/feedback.css'

import Image from '../assets/img/return.svg'

export default function Feedback() {
    const handleClick = () => {
        const destinationPhone = process.env.REACT_APP_PHONE
        window.location.href = `https://api.whatsapp.com/send/?phone=${destinationPhone}&text=[ENVIE%20AQUI%20O%20SEU%20COMPROVANTE]`
    }

    return (
        <section id="feedback">
            <img src={Image} alt="Parabéns" />
            <div className="feedback-container">
                <h1>Obrigado <span role="img" aria-label="smiling face">😉</span></h1>
                <p>Falta somente mais um passo para você adquirir sua feijoada beneficente.<br />
                <span className="feedback-instructions">Clique no botão abaixo e Envie o comprovante de pagamento via Whatsapp.</span></p>
                <button className="feedback-btn" onClick={handleClick}>Enviar Comprovante</button>
            </div>
        </section>
    )
}
