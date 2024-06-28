import React from "react";

export const FooterLove = () => {
  const facebook = <i className="fab fa-facebook"></i>;
  const instagram = <i className="fab fa-instagram"></i>;
  const tiktok = <i className="fab fa-tiktok"></i>;

  return (
    <>
      <footer className="text-center bg-body-tertiary">
        <div className="container pt-4">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-body m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          className="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.05);"
        >
          © 2020 Copyright:
          <a className="text-body" href="#!">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </>
  );
};
