import React from "react";
import "../css/about.css";

export const About = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row mt-3 justify-content-center">
          <div className="col-sm-5 ">
            <img
              src="../img/loveRct.jpg"
              alt="About Us"
              className="img-fluid nos"
              style={{ height: "450px", width: "600px", borderRadius: "100px" }}
            />
          </div>
          <div className="card col-sm-5 p-4 text-center " style={{backgroundColor: "#0087B7", color: "white", fontSize: "16px"}}>
            <h2 className="text-light mb-3 text-center">Sobre nosotros</h2>
            <p>
              Nuestra funeraria se especializa en el cuidado y entierro de
              mascotas. Estamos orgullosos de ser parte de este proceso tan
              importante y emotivo para ti y tu compañero peludo. Nuestro
              compromiso es brindar un servicio de alta calidad y respeto a las
              necesidades de nuestros amigos de cuatro patas que han partido.
            </p>
            <p>
              Nuestro equipo de profesionales está dedicado a ofrecer un
              servicio personalizado y responsable, donde cada detalle se tiene
              en cuenta para garantizar que el entierro de tu mascota sea un
              recuerdo digno. Siempre estamos buscando innovar y mejorar
              nuestros servicios para ofrecer a tu mascota un adiós digno.
            </p>
            <p>
              Si tienes alguna pregunta o necesitas más información, no dudes en
              contactarnos. Estamos aquí para ayudarte en cualquier aspecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
