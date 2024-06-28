import React, { useEffect, useState } from "react";
import { Number, plan1, plan2, whatsappLink } from "../config/arreglos";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { isMobile } from "./../config/funciones";
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
        chatMessage={`Tienes alguna pregunta sobre nuestra funeraria ? `}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />
      <div className="container mb-3">
        <h4 className="text-center mt-2 mb-4 heding"  >
          Traslado de la mascota fallecida un solo traslado Suroeste Antioqueño
          Medellín o área Metropolitana
        </h4>
        <div className="row">

          <div className={`col-sm-6 ${mobile ? "mb-3" : ""} `}>
            <div
              className="card text-center cnt"
              style={{
                padding: "10px",
                backgroundColor: "#0087B7",
                color: "white",
                boxShadow: "5px 4px 8px black",
                height: "600px",
              }}
            >
              <div
                className="card-body"
                style={mobile ? { fontSize: "11px", textAlign: "center" } : { fontSize: "16px" }}
              >
                <h4 className="card-title">Plan Sin Devolución De Cenizas</h4>
                <img
                  src="../img/plan 1.jpeg"
                  alt="Plan 1"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "100px",
                    marginBottom: "20px ",
                  }}
                />
                <p className="card-text">
                  {plan1.map((servicio, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <strong className="mb-4">{servicio}</strong>
                      <img
                        src="../img/ok1.png"
                        type="checkbox"
                        style={{ height: "25px", marginBottom: "10px" }}
                      />
                    </div>
                  ))}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  title="Chat WhatsApp"
                  className="btn btn-secondary btn-informacion"
                >
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 ">
            <div className="card text-center cnt"
              style={{
                padding: "10px",
                backgroundColor: "#9E9E9E",
                color: "white",
                // fontSize: "16px",
                boxShadow: "5px 4px 8px black",
                height: "600px",
              }}
            >
              <div
                className="card-body"
                style={mobile ? { fontSize: "11px", textAlign: "center" } : { fontSize: "16px" }}
              >
                <h4 className="card-title">Plan Con Devolución De Cenizas</h4>
                <img
                  src="../img/plan 1.jpeg"
                  alt="Plan 1"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "100px",
                    marginBottom: "20px ",
                  }}
                />
                <p className="card-text">
                  {plan2.map((servicio, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <strong className="mb-2">{servicio}</strong>
                      <img
                        src="../img/ok1.png"
                        type="checkbox"
                        style={{ height: "25px", marginBottom: "10px" }}
                      />
                    </div>
                  ))}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  title="Chat WhatsApp"
                  className="btn btn-primary btn-informacion"
                >
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
