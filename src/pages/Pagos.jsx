import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Number } from "../config/arreglos";
import "../css/pagos.css";

export const Pagos = () => {
  const logo = "../../img/logoS.png";

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

      <div className="container-fluid mt-3">
        <div className="card cont-ppal">
          <h3 className="text-center mt-1 mb-4">Nuestros medios de pago</h3>
          <div className="row">
            {/* Puntos de pago */}
            <div className="col-sm-4">
              <div className="card cntPG1">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">
                    Punto de pago fisico
                  </h4>
                  <p className="card-text text-center mb-5">
                    Puedes acercarte a la oficina principal para realizar el
                    pago de la mensualidad.
                  </p>
                  <p className="text-center">
                    <strong className="mb-2 ">
                      <i className="fas fa-map-marker-alt fs-5 me-3" />
                      Calle 49a #50-11 Andes Antioquía <br />
                      Edificio Cóndor de los Andes local 202
                    </strong>{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagos virtuales */}
            <div className="col-sm-4">
              <div className="card cntPG2">
                <div className="card-body">
                  <h4 className="card-title text-center mb-4">Pagos por Nequi</h4>
                  <div className="cont-img">
                    <img
                      className="nequi"
                      src="../../img/bancolombia.jpeg"
                      // src="../../img/nequi.png"
                      alt="Cuenta nequi"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagos virtuales */}
            <div className="col-sm-4">
              <div className="card cntPG3">
                <div className="card-body cont-img">
                  <h4 className="card-title text-center mb-4">
                    Pagos por Bancolombia
                  </h4>
                    <img
                      className="bancolombia"
                      src="../../img/bancolombia.jpeg"
                      alt="Cuenta bancolombia"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
