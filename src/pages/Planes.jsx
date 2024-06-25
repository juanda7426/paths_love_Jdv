import React from "react";

export const Planes = () => {
  const Planes = ({ plan, url, description, lista }) => {
    return (
      <div className="col-sm-4">
        <div
          className="card text-center"
          style={{
            padding:"10px",
            backgroundColor: "#0087B7",
            color: "white",
            fontSize: "16px",
            boxShadow: "5px 4px 8px black",
            height: "700px"
          }}
        >
          <div className="card-body">
            <h5 className="card-title">{plan}</h5>
            <img
              src={url}
              alt="Plan 1"
              style={{ height: "200px", width: "180px", borderRadius: "100px", marginBottom:"20px " }}
            />
            <div className="card-text text-center mb-2"><h5>{description} </h5></div>
            <div > {lista.map((item, index) => (
              <ul key={index}>{item}</ul>
            ))}</div>
            <a href="#" className="btn btn-secondary">
              Comprar
            </a>
          </div>
        </div>
      </div>
    );
  };

  const l1 = [
    "Servicio de 1 mes de duración",
    "Cremacion",
    "Porta retratos de 12 x 23 cm",
    "Cofre de 10 x 10 cm",
    "transporte del entierro",
  ];

  const l2 = [
    "Servicio de 2 mes de duración",
    "Cremacion",
    "Porta retratos de 12 x 23 cm",
    "Cofre de 10 x 10 cm",
    "transporte del entierro",
    "Flores",
  ];

  const l3 = [
    "Servicio de 3 mes de duración",
    "Cremacion",
    "Porta retratos de 12 x 23 cm",
    "Cofre de 10 x 10 cm",
    "transporte del entierro",
    "Flores",
    "Acompañamiento",
  ];

  //*************************** */
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3 mb-3 justify-content-center">
          <div className="col-sm-8">
            <h2 className="text-center mb-5">Nuestros Planes</h2>

            <div className="row ">
              <Planes
                plan="Plan 1"
                url="../img/funeral.jpeg"
                description="Descripcion"
                lista={l1}
              />

              <Planes
                plan="Plan 2"
                url="../img/funeral.jpeg"
                description="Descripcion"
                lista={l2}
              />

              <Planes
                plan="Plan 3"
                url="../img/funeral.jpeg"
                description="Descripcion"
                lista={l3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
