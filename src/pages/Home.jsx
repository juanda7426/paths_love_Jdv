import React from 'react'
// import { FooterLove } from '../components/FooterLove'
// import { FloatingWhatsApp } from 'react-floating-whatsapp'
// import { Number } from '../config/arreglos';

export const Home = () => {
  // const logo = "../../img/logoS.png";

  
  return (
    <>
         {/* <FloatingWhatsApp
        phoneNumber={Number}
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
      /> */}
      <div className="container text-center" >
        <img src="../../img/construccion.jpg" alt="en construccion"  style={{ height: "80%", width: "80%", marginTop: "20px"}}/>
      </div>

    </>
  )
}
