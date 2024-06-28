import React, { useEffect, useState } from "react";
import "../css/about.css";
import { isMobile } from "../config/funciones";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const About = () => {
  const [mobile, setMobile] = useState(false);
  const logo = "../../img/logoS.png";
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
        chatMessage={`Tienes alguna pregunta sobre nuestra funeraria ? `}
        buttonClassName="me-2 mb-0"
        buttonStyle={{ marginBottom: "80px" }}
        chatboxStyle={{ marginBottom: "70px" }}
        avatar={logo}
      />
      <div className="container-fluid ">
        {/* Nosotros */}
        <div
          className="card mt-3 "
          style={{
            boxShadow: "5px 4px 8px black",
            padding: "20px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <div className="card-body">
            <h3
              className="text-center"
              style={mobile ? { fontSize: "20px" } : { fontSize: "35px" }}
            >
              Quienes somos?
            </h3>
            <div className="row mt-3 justify-content-evenly">
              <div className="col-sm-5 me-2 ">
                <img
                  src="../../img/loveRct.jpg"
                  alt="About Us"
                  className="img-fluid "
                  style={
                    mobile
                      ? {
                          height: "250px",
                          width: "400px",
                          borderRadius: "50px",
                          marginBottom: "20px",
                        }
                      : {
                          height: "450px",
                          width: "600px",
                          borderRadius: "50px",
                        }
                  }
                />
              </div>
              <div
                className="card col-sm-5 p-3 ms-2 text-center "
                style={{
                  backgroundColor: "#0087B7",
                  color: "white",
                  fontSize: "16px",
                }}
              >
                <h2 className="text-light mb-3 text-center">Sobre nosotros</h2>
                <p className="mt-1">
                  Nuestra funeraria se especializa en el cuidado y entierro de
                  mascotas. Estamos orgullosos de ser parte de este proceso tan
                  importante y emotivo para ti y tu compañero peludo. Nuestro
                  compromiso es brindar un servicio de alta calidad y respeto a
                  las necesidades de nuestros amigos de cuatro patas que han
                  partido.
                </p>
                <p className="mt-1">
                  Nuestro equipo de profesionales está dedicado a ofrecer un
                  servicio personalizado y responsable, donde cada detalle se
                  tiene en cuenta para garantizar que el entierro de tu mascota
                  sea un recuerdo digno. Siempre estamos buscando innovar y
                  mejorar nuestros servicios para ofrecer a tu mascota un adiós
                  digno.
                </p>
                <p className="mt-1">
                  Si tienes alguna pregunta o necesitas más información, no
                  dudes en contactarnos. Estamos aquí para ayudarte en cualquier
                  aspecto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mision */}
        <div
          className="card mt-3"
          style={{ boxShadow: "5px 4px 8px black", padding: "20px" }}
        >
          <div className="card-body">
            <h3 className="text-center">Nuestra Mision</h3>
            <div className="row mt-3 justify-content-evenly">
              <div
                className="card col-sm-5 p-3 ms-2 text-center"
                style={{
                  backgroundColor: "#9e9e9e",
                  color: "white",
                }}
              >
                <h2 className="text-light mb-3 text-center">Mision</h2>
                <p className="mt-1">
                  Somos más que una empresa; somos un apoyo compasivo en los
                  momentos más difíciles. Nos dedicamos a brindar el mejor
                  acompañamiento y asesoría durante la pérdida de tu mascota.
                </p>
                <p className="mt-4">
                  Pero no nos detenemos ahí. Nuestra prioridad es la
                  conservación del medio ambiente, porque creemos que honrar a
                  nuestros seres queridos peludos también implica cuidar el
                  planeta que compartimos.
                </p>
                <p className="mt-4">
                  Con un alto sentido de responsabilidad social, trabajamos
                  incansablemente para aliviar el dolor y ofrecer un legado de
                  amor y respeto hacia todas las mascotas que nos acompañan en
                  esta vida.
                </p>
              </div>
              <div className="col-sm-5 me-2 ">
                <img
                  src="../img/loveRct.jpg"
                  alt="About Us"
                  className="img-fluid"
                  style={
                    mobile
                      ? {
                          height: "250px",
                          width: "400px",
                          borderRadius: "50px",
                          marginTop: "20px",
                        }
                      : {
                          height: "450px",
                          width: "600px",
                          borderRadius: "50px",
                        }
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div
          className="card mt-3"
          style={{
            boxShadow: "5px 4px 8px black",
            padding: "20px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <div className="card-body">
            <h3 className="text-center">Nuestra Vision</h3>
            <div className="row mt-3 justify-content-evenly">
              <div className="col-sm-5 me-2 ">
                <img
                  src="../img/loveRct.jpg"
                  alt="About Us"
                  className="img-fluid "
                  style={
                    mobile
                      ? {
                          height: "250px",
                          width: "400px",
                          borderRadius: "50px",
                          marginBottom: "20px",
                        }
                      : {
                          height: "450px",
                          width: "600px",
                          borderRadius: "50px",
                        }
                  }
                />
              </div>

              <div
                className="card col-sm-5 p-3 ms-2 text-center"
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                  // fontSize: "16px",
                }}
              >
                <h2 className="text-light mb-3 text-center">Vision</h2>
                <p className="mt-1">
                  Destacarnos como la empresa líder a nivel nacional en el
                  acompañamiento, asesoría, traslado y cremación de mascotas.
                </p>
                <p className="mt-4">
                  Nuestro compromiso es brindar un servicio excepcional,
                  honrando la memoria de esos seres queridos que forman parte de
                  nuestras familias.
                </p>
                <p className="mt-4">
                  Trabajamos con pasión y dedicación para aliviar el dolor de
                  quienes atraviesan este difícil momento, ofreciendo un apoyo
                  integral y humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
