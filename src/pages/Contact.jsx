import React from 'react'

export const Contact = () => {
  return (
    <>
      <div className="container-fluid ">
      <div className="row mt-3 justify-content-center">
          <div className="card col-sm-5 me-3 p-3" style={{backgroundColor: "#0087B7", color: "white", fontSize: "16px"}}>
            <h2 className="text-center mb-5">Contactanos</h2>
              <div className="form-group mb-2">
                <label htmlFor="name">Nombre</label>
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="message">Mensaje</label>
                <textarea className="form-control" rows="3"/>
              </div>
              <button type="button" className="btn btn-secondary mt-3">Enviar</button>
          </div>

          <div className="card col-sm-5 ms-3 bg-dark text-light text-center p-3">
            <h2 className="text-center mb-4">Datos de contacto</h2>
            <p>
             <p> <strong className='mb-2'>WhatsApp:</strong> +57 322 6767553 <br /> </p>
             <p> <strong className='mb-2'>Email:</strong> caminosdeamorsas@gmail.com<br /> </p>
             <p> <strong className='mb-2'>Dirección:</strong> Calle 49a #50-11 Andes Antioquía <br />Edificio Cóndor de
              los Andes local 202 </p> <br />
              <strong className='mt-4'>Redes Sociales:</strong> <br />
              <a href="https://www.facebook.com/people/Funeraria-caminos-de-amor/100066903139742/" target="_blank" ><i className="fab fa-facebook fs-5 mb-4 mt-3"> Funeraria caminos de amor</i></a> <br />
              <a href="#" target="_blank" ><i className="fab fa-instagram fs-5 mb-4"> Caminosde.Amor</i></a> <br />
              <a href="#" target="_blank" ><i className="fab fa-tiktok fs-5 mb-4"> caminosdeAmor4</i></a> <br />
            </p>
          </div>
        </div>
      </div>


    </>
  )
}
