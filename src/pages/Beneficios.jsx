import React, { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { isMobile } from "../config/funciones";
import { Number } from "../config/arreglos";
import "../css/beneficios.css";

export const Beneficios = () => {
  const [mobile, setMobile] = useState(false);
  const logo = "../../img/logoS.png";

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
        chatMessage={'Tienes alguna pregunta sobre nuestros beneficios?'}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />
      <div className="container-fluid ">
        {/* Para mascotas */}
        <div className="card mt-3 "
          style={{
            boxShadow: "5px 4px 8px black",
            padding: "20px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <div className="card-body">
            <h3 className="text-center"
              style={mobile ? { fontSize: "20px" } : { fontSize: "35px" }}
            >
              Beneficios Mascota
            </h3>
            <div className="row  justify-content-evenly">
              <div className="row row-cols-1 row-cols-md-2 g-4">
              
                <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/Veterinario.jpg" className="card-img-top img-card-beneficios" alt="consulta veterinaria" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">10% DE DESCUENTO EN CONSULTA VETERINARIA</h5>
                    </div>
                  </div>
                </div>
              
                <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/desparacitacion.jpg" className="card-img-top img-card-beneficios" alt="desparacitacion mascotas" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">DESPARACITACION INTERNA PATA TU MASCOTA CADA 4 MESES</h5>
                    </div>
                  </div>
                </div>
             
               <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/cirujia.jpg" className="card-img-top img-card-beneficios" alt="cirujia mascotas" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">05% DE DESCUENTO EN CIRUGÍA EN UN TOPE HASTA $500.000 EL VALOR DE LA MISMA</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Para la Familia */}
        <div className="card mt-3 "
          style={{
            boxShadow: "5px 4px 8px black",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <div className="card-body">
            <h3
              className="text-center"
              style={mobile ? { fontSize: "20px" } : { fontSize: "35px" }}
            >
              Beneficios Para La Familia
            </h3>
            <div className="row  justify-content-evenly">
              <div className="row row-cols-1 row-cols-md-2 g-4">
              
                <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/odontologia.jpg" className="card-img-top img-card-beneficios" alt="odontologia" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">ODONTOLOGÍA Y ORTODONCIA</h5>
                    </div>
                  </div>
                </div>
              
                <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/doctor.jpg" className="card-img-top img-card-beneficios" alt="doctor" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">MÉDICO GENERAL</h5>
                    </div>
                  </div>
                </div>
             
               <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/lboratorio.jpg" className="card-img-top img-card-beneficios" alt="laboratorio clinico" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">LABORATORIO CLÍNICO</h5>
                    </div>
                  </div>
                </div>
               <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/optometria.jpg" className="card-img-top img-card-beneficios" alt="optometria" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">OPTOMETRIA</h5>
                    </div>
                  </div>
                </div>
               <div className="col">
                  <div className="card tarjeta">
                    <img src="../../img/censa.jpg" className="card-img-top img-card-beneficios" alt="Logo CENSA" />
                    <div className="card-body">
                      <h5 className="card-title  titulos">MATRICULA GRATIS PARA ESTUDIO CENSA (APLICA CONDICIONES)</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
