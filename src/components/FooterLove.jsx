import React from 'react'

export const FooterLove = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>

            {/* <!-- Footer --> */}
            <div className="container-fluid text-white-50 footer bg-dark" id='footer'>
                <div className="container py-4">
                    <div className="row g-5 text-center">

                        {/* Col1 */}
                        <div className="col-md-6 col-lg-4" >
                            <img src={""}
                                width="130"
                                alt="logo_white" />
                            <div className='mt-2'>Somos fabricantes de equipos de cómputo <br />y mayoristas de tecnología</div>
                            <div className='mt-2'>
                                <a className='m-1'
                                    href="#"  target="_blank">
                                    <i className="fab fa-facebook" />
                                </a>
                                <a className='m-1'
                                    href="#"  target="_blank">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className='m-1'
                                    href="#"  target="_blank">
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                            </div>

                        </div>

                        {/* col2 */}
                        <div className="col-md-6 col-lg-4">
                            <h6 className="text-uppercase font-weight-bold text-white mt-5 mt-xs-">Enlaces Importantes</h6>
                            <p className='my-0'><i className="fa-solid fa-align-justify me-3"/>Términos y Condiciones</p>
                            <p className='my-0'><i className="fa-solid fa-file-shield me-3"/>Politica-tratamiento-de-datos.pdf</p>
                            <p className='my-0'><i className="fa-solid fa-question me-3"/>F.A.Q</p>
                        </div>

                        {/* col3 */}
                        <div className="col-md-12 col-lg-4">
                            <p className='mb-0 mt-3'><i className="fa-solid fa-link me-3 mt-3"/>www.heritagegroup.com.co</p>
                            <p className='my-0'><i className="fa fa-phone-alt me-3"/>+ 350 482 5308</p>
                            <p className='my-0'><i className="fa fa-envelope me-3" />info@heritagegroup.com.co</p>
                            <img src={""} height="50" className='mt-3' />
                        </div>
                    </div>
                </div>

                <div className="container text-center">
                    <div className="copyright" style={{ fontSize: '12px' }}>
                        <div className="row">
                            <div className="col-md-4 text-center  mb-md-0">
                                <div className="text-right">
                                    <a href=""
                                         target="_blank"
                                        className='text-decoration-none text-white-50'>
                                        Procesamos nuestros pagos con:
                                        <img src={""} alt="" height={'40px'} /></a>
                                </div>
                            </div>
                            <div className="col-md-4 text-center  mb-md-0">
                                <p className='my-2'>Copyright &copy; Heritage Group SAS.  All Right Reserved 2023</p>
                            </div>
                            <div className="col-md-4 text-center text-md-center mb-md-0">
                                <p className='my-2'>by LivenUP!</p>
                            </div>
                        </div>
                    </div>
                </div>

            {/* <!-- Back to Top --> */}
            <button
                aria-label="toTop"
                className="btn btn-lg btn-lg-square text-white border-light"
                onClick={scrollToTop}>
                <i className="fa-solid fa-arrow-up"></i>
            </button>
            </div>
            {/* <!-- Footer --> */}

        </>
    )
}

