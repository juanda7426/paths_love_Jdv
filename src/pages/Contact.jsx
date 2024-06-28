import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { isMobile } from "./../config/funciones";

export const Contact = () => {
  const logo = "../../img/logoS.png";

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    isMobile(setMobile);
  }, []);

  return (
    <>
      <FloatingWhatsApp
        phoneNumber="57 3007256149"
        accountName="Caminos de Amor"
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage={`Tienes alguna pregunta sobre nuestros servicios ? `}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />
      <div className="container-fluid">
        <div className="row mt-3 justify-content-evenly ">
          
          <div className={`card col-sm-5 p-3 ${mobile && "mb-3"}`}
            style={{
              backgroundColor: "#0087B7",
              color: "white",
              fontSize: "16px",
            }}
          >
            <h2 className="text-center mb-5">Contactanos</h2>
            <div className="form-group mb-2">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="message">Mensaje</label>
              <textarea className="form-control" rows="3" />
            </div>
            <button type="button" className="btn btn-secondary mt-3 mb-3">
              Enviar
            </button>
          </div>

          <div className="card col-sm-5 bg-dark text-light text-center p-3">
            <h2 className="text-center mb-4">Datos de contacto</h2>
            <p>
              <p>
                {" "}
                <strong className="mb-2">
                  <i className="fab fa-whatsapp fs-5"></i>
                </strong>{" "}
                +57 322 6767553 <br />{" "}
              </p>
              <p>
                {" "}
                <strong className="mb-2">
                  <i className="fas fa-envelope fs-5"></i>
                </strong>{" "}
                caminosdeamorsas@gmail.com
                <br />{" "}
              </p>
              <p>
                {" "}
                <strong className="mb-2">
                  <i className="fas fa-map-marker-alt fs-5"></i>
                </strong>{" "}
                Calle 49a #50-11 Andes Antioquía <br />
                Edificio Cóndor de los Andes local 202{" "}
              </p>{" "}
              <br />
              <strong className="mt-4">Redes Sociales:</strong> <br />
              <a
                href="https://www.facebook.com/people/Funeraria-caminos-de-amor/100066903139742/"
                target="_blank"
              >
                <i className="fab fa-facebook fs-5 mb-4 mt-3">
                  {" "}
                  Funeraria caminos de amor
                </i>
              </a>{" "}
              <br />
              <a href="#" target="_blank">
                <i className="fab fa-instagram fs-5 mb-4"> Caminosde.Amor</i>
              </a>{" "}
              <br />
              <a href="#" target="_blank">
                <i className="fab fa-tiktok fs-5 mb-4"> caminosdeAmor4</i>
              </a>{" "}
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
