import React from 'react'
import { FooterLove } from '../components/FooterLove'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export const Home = () => {
  const logo = "../../img/logoS.png";

  
  return (
    <>
         <FloatingWhatsApp
        phoneNumber="57 3007256149"
        accountName="Caminos de Amor"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage={`Tienes alguna pregunta sobre nuestra funeraria ? `}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />
      <h1 className='text-center'>
        Home</h1>

    </>
  )
}
