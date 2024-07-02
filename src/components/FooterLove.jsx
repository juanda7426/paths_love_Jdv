import React from 'react'

export const FooterLove = () => {

    return (
        <>
            <div className="container-fluid text-white mt-5 "
                style={{ backgroundColor: "#0087B7" }}>
                <div className="row text-center">

                    {/* Col1 */}
                    <div className="col-sm-4 mt-2" >
                        <div className="text-center my-0">
                            <img src='../img/logo.png '
                                className='img-fluid my-0'
                                width="130"
                                alt="logo caminos de amor" />
                            <h5>Caminos de Amor</h5>
                        </div>
                    </div>

                    {/* Col2 */}
                    <div className="col-sm-4 mt-2" >
                        <h5 className='mt-3 mb-4'>Siguenos</h5>
                        <div className='mt-2'>
                            <a className='m-3'
                                title='Facebook'
                                href="https://www.facebook.com/people/Funeraria-caminos-de-amor/100066903139742/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-facebook fs-3" style={{ color: "white" }} />
                            </a>
                            <a className='m-3'
                                title='Instagram'
                                href="https://www.instagram.com/caminosde.amor?utm_source=qr&igsh=OGx0Zm91dTF3enA1"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-instagram fs-3" style={{ color: "white" }} />
                            </a>
                            <a className='m-3'
                                title='Tik-Tok'
                                href="https://vm.tiktok.com/ZMrrg4Vhu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-tiktok fs-3" style={{ color: "white" }} />
                            </a>
                        </div>
                    </div>

                    {/* col3 */}
                    <div className="col-sm-4 mt-1">
                        <p className='mb-0 mt-2'><i className="fa fa-globe me-3 mt-3" />www.caminosdeamor.com</p>
                        <p className='my-0'><i className="fa fa-phone-alt me-3" />323 403 59 61 / 310 539 06 93</p>
                        <p className='my-0'><i className="fa fa-envelope me-3" />caminosdeamorsas@gmail.com</p>
                    </div>
                </div>


                <div className="row justify-content-center bg-dark">

                    <div className="col-md-4 text-center" >
                        <p className='my-2'>Copyright &copy; Caminos de Amor SAS.  All Right Reserved 2024</p>
                    </div>
                    <div className="col-md-4 text-center text-md-center mb-md-0">
                        <p className='my-2'>Desarrollado por JDEV!</p>
                    </div>
                </div>
            </div>

        </>
    )
}

