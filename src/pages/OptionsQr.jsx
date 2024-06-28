import React from 'react'
import '../css/qr.css'
import { NavLink } from 'react-router-dom'

export const OptionsQr = () => {
    const whatsappNumber = "+573007256149";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            <div className="container-fluid mt-1 ">
                <div className="row text-center mt-5 ">
                    <div className="col-sm-12 mb-5">
                        <NavLink to={'/planes'} className="btn qrBtn">Planes</NavLink>
                    </div>
                    <div className="col-sm-12 mb-5">
                        <NavLink to={"/pagos"} className="btn qrBtn">Pagar</NavLink>
                    </div>
                    <div className="col-sm-12 mb-5">
                        <a href={whatsappLink} target='_blank' className="btn qrBtn">Servicio Funebre</a>
                    </div>
                </div>
            </div>
        </>
    )
}
