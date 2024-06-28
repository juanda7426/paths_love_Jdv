import React from "react";
import "../css/main.css";

export const MainLove = ({ children }) => {
  const whatsappNumber = "+573007256149";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className=" d-flex justify-content-center align-items-start">
      {children}
      {/* Botón de WhatsApp flotante */}
      <a
        href={whatsappLink}
        title="Chat WhatsApp"
        target="_blank"
        className="btn btn-success whatsapp-float fab fa-whatsapp"
      />
    </div>
  );
};
