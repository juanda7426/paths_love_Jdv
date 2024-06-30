import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Number } from "../config/arreglos";
import { isMobile } from './../config/funciones';
import "../css/pagos.css";
import { FooterLove } from "../components/FooterLove";

export const Pagos = () => {
  const logo = "../../img/logoS.png";
  const [mobile, setMobile] = useState(false);

  //*************************** */
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
        chatMessage={`Tienes alguna pregunta sobre nuestras formas de pago? `}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />

      <div className="container-fluid mt-3 mb-2">
        <div className="card p-3" style={{boxShadow:"5px 4px 8px black",backgroundColor:"#0087B7",color:"white",fontSize:"16px"}}>
          <h3 className="text-center mb-2 text-white">
            Nuestros medios de pago
          </h3>
          <div className="text-center bg-dark text-white my-2 border border-white "  style={mobile?{padding:"10px",borrderRadius:"10px"}:{ padding:"13px",borrderRadius:"10px" }}>
            <strong style={mobile?{fontSize:"12px"}:{fontSize:"18px" }}>
              No olvides enviar el comprobante de pago para registrar la
              mensualidad de tu mascota.
            </strong>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100 cntPG1">
                <div class="card-body text-light">
                  <h4 className="card-title text-center  mb-4">
                    Punto de pago fisico
                  </h4>
                  <p className="card-text text-center mb-5 fs-5">
                    Puedes acercarte a la oficina principal para realizar el
                    pago de la mensualidad.
                  </p>
                  <div className="text-center">
                    <i className="fas fa-map-marker-alt fs-1 mb-4" />
                  </div>
                  <p className="text-center">
                    <strong className="mb-2 fs-5">
                      Calle 49a #50-11 Andes Antioquía <br />
                      Edificio Cóndor de los Andes local 202
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100 p-3 cntPG2 text-light">
                <h4 className="card-title text-center">Pagos por Nequi</h4>
                <div class="row card-body justify-content-center">
                  <img
                    className="card-img-top rounded-5 "
                    src="../../img/nequi.jpeg"
                    alt="Cuenta nequi"
                  />
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100 p-3 cntPG3 text-light">
                <h4 className="card-title text-center ">Pagos por Bancolombia</h4>
                <div class="row card-body justify-content-center">
                  <img
                    className="card-img-top rounded-5 "
                    src="../../img/bancolombia.jpeg"
                    alt="Cuenta bancolombia"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLove/>
    </>
  );
};
