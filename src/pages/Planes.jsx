import React, { useEffect, useState } from "react";
import { Number, plan1, plan2, plan3, whatsappLink } from "../config/arreglos";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { isMobile } from "./../config/funciones";
import { FooterLove } from "../components/FooterLove";
import "../css/planes.css";

export const Planes = () => {
  
  const logo = "../../img/logoS.png";
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    isMobile(setMobile);
  }, []);

  //*************************** */
  return (
    <>
      <FloatingWhatsApp
        phoneNumber={Number}
        accountName="Caminos de Amor"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage='Tienes alguna pregunta sobre nuestros servicios y planes?'
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />

      <div className="container mb-3">
        <h4 className="text-center mt-2 mb-4 heding" style={mobile?{fontSize:"12px"}:{fontSize:"16px" }}  >
          Traslado de la mascota fallecida un solo traslado Suroeste Antioqueño
          Medellín o área Metropolitana
        </h4>
        <div className="row">

          <div className={`col-sm-4 ${mobile ? "mb-3" : ""} `}>
            <div className="card text-center cnt1">
              <div className="card-body"
                // style={mobile ? { fontSize: "11px", textAlign: "center" } : { fontSize: "16px" }}
              >
                <h4 className="card-title">Plan Sin Devolución De Cenizas</h4>
                <img
                  src="../img/sinDevOk.jpg"
                  className="img-card "
                  alt="Plan sin devolución de cenizas"
                  />
                <p className="card-text">
                  {plan1.map((servicio, index) => (
                    <div
                      key={index}
                      className="plan"
                    >
                      <strong className="mb-4">{servicio}</strong>
                      <img
                        src="../img/ok1.png"
                        alt="ok"
                        type="checkbox"
                        style={{ height: "25px", marginBottom: "10px" }}
                      />
                    </div>
                  ))}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Chat WhatsApp"
                  className="btn btn-informacion1"
                  >
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>

          <div className={`col-sm-4 ${mobile ? "mb-3" : ""} `}>
            <div className="card text-center cnt2" >
              <div
                className="card-body"
                // style={mobile ? { fontSize: "11px", textAlign: "center" } : { fontSize: "16px" }}
              >
                <h4 className="card-title">Plan Con Devolución De Cenizas</h4>
                <img
                  src="../img/conDevOk.jpg"
                  className="img-card "
                  alt="Plan con devolución de cenizas"
                />
                <p className="card-text">
                  {plan2.map((servicio, index) => (
                    <div
                      key={index}
                      className="plan"
                    >
                      <strong className="mb-2">{servicio}</strong>
                      <img
                        src="../img/ok1.png"
                        alt="ok"
                        type="checkbox"
                        style={{ height: "25px", marginBottom: "10px" }}
                      />
                    </div>
                  ))}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Chat WhatsApp"
                  className="btn btn-informacion2"
                >
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>

          <div className={`col-sm-4 ${mobile ? "mb-3" : ""} `}>
            <div className="card text-center cnt3" >
              <div
                className="card-body"
                // style={mobile ? { fontSize: "11px", textAlign: "center" } : { fontSize: "16px" }}
              >
                <h4 className="card-title">Planes Prepago</h4>
                <p>Con o Sin Devolución De Cenizas</p>
                <img
                  src="../img/funeral.jpeg"
                  className="img-card "
                  alt="Plan prepago"
                  />
                <p className="card-text">
                  {plan3.map((servicio, index) => (
                    <div
                      key={index}
                      className="plan"
                    >
                      <strong className="mb-4">{servicio}</strong>
                      <img
                        src="../img/ok1.png"
                        alt="ok"
                        type="checkbox"
                        style={{ height: "25px", marginBottom: "10px" }}
                      />
                    </div>
                  ))}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Chat WhatsApp"
                  className="btn btn-informacion1"
                  >
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLove/>
    </>
  );
};
