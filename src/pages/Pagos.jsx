import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Pagos = () => {
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
      <div className="container">
        <h3 className="text-center">Nuestros medios de pago</h3>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Puntos de pago</h5>
                <p className="card-text">
                  Nuestros medios de pago son en gana,efecty, etc..
                </p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary">
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Virtuales</h5>
                <p className="card-text">
                  Nuestros medios de pago Virtuales son nequi,
                  bancolombia,daviplata,etc..
                </p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary">
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tarjetas</h5>
                <p className="card-text">
                  Nuestros medios de pago son con tarjetas de credito y de
                  debito
                </p>
                <div className="text-center">
                  <button type="button" className="btn btn-primary">
                    Pagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
