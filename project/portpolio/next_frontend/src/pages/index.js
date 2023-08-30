import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { createClient } from "next-sanity";
// import PortableText from "react-portable-text";
// import Link from "next/link";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ pets }) {
  return (
    <>
      <Head>
        <Script
          defer
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        ></Script>
        <Script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        ></Script>
        <Script defer src="static/lib/wow/wow.min.js"></Script>
        <Script defer src="static/lib/easing/easing.min.js"></Script>

        <Script defer src="static/lib/waypoints/waypoints.min.js"></Script>
        <Script defer src="static/lib/counterup/counterup.min.js"></Script>
        <Script defer src="static/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script defer src="static/lib/tempusdominus/js/moment.min.js"></Script>
        <Script
          defer
          src="static/lib/tempusdominus/js/moment-timezone.min.js"
        ></Script>
        <Script
          defer
          src="static/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
        ></Script>

        {/* <!-- Template JavaScript --> */}
        <Script defer src="static/js/main.js"></Script>
        <meta charSet="utf-8" />
        <title>Flavour Paradize - Bootstrap Restaurant Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="deScription" />

        {/* <!-- Favicon --> */}
        <link href="static/img/favicon.ico" rel="icon" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
        />

        {/* <!-- Icon Font Stylesheet --> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="static/lib/animate/animate.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="static/lib/owlcarousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="static/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
        />

        {/* <!-- Customized Bootstrap Stylesheet --> */}
        <link href="static/css/bootstrap.min.css" rel="stylesheet" />

        {/* <!-- Template Stylesheet --> */}
        <link href="static/css/style.css" rel="stylesheet" />

        <Script>
          {/* function validateForm() {
            let x = document.forms["myForm"]["Contact_number"].value;
              if (x < 1000000000 || x > 10000000000) {
                alert("Contact number should be 10 digit only");
              return false;
            }
          let r_date = document.forms["myForm"]["Date"].value;
          let t_date = new Date();
          if (r_date < t_date) {
            alert("Date should be greater than today's date");
          return false;
            }
          alert("form is submitted successfully")
          return true;
        } */}
        </Script>
      </Head>
      <main>
        <div className="w-100 bg-white p-0">
          {/* <!-- Spinner Start --> */}
          <div
            id="spinner"
            className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
              aria-live="polite"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          {/* <!-- Spinner End --> */}

          {/* <!-- Navbar & Hero Start --> */}
          <div className="w-100 position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
              <a href="" className="navbar-brand p-0">
                <h1 className="text-primary m-0">
                  <i className="fa fa-utensils me-3"></i>Flavour Paradize
                </h1>
                {/* <!-- <img defer src="img/logo.png" alt="Logo"> --> */}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                  <a href="/" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="about" className="nav-item nav-link">
                    About
                  </a>
                  <a href="service" className="nav-item nav-link">
                    Service
                  </a>
                  <a href="menu" className="nav-item nav-link">
                    Menu
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div className="dropdown-menu m-0">
                      <a href="booking" className="dropdown-item">
                        Booking
                      </a>
                      <a href="team" className="dropdown-item">
                        Our Team
                      </a>
                      <a href="testimonial" className="dropdown-item">
                        Testimonial
                      </a>
                    </div>
                  </div>
                  <a href="contact" className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <a href="booking" className="btn btn-primary py-2 px-4">
                  Book A Table
                </a>
              </div>
            </nav>

            <div className="w-100 py-5 bg-dark hero-header mb-5">
              <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">
                      Enjoy Our
                      <br />
                      Delicious Meal
                    </h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <a
                      href="booking"
                      className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                    >
                      Book A Table
                    </a>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img
                      className="img-fluid"
                      defer
                      src="static/img/chicken thali.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Navbar & Hero End --> */}

          {/* <!-- Service Start --> */}
          <div className="w-100 py-5">
            <div className="container">
              <div className="row g-4">
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                      <h5>Master Chefs</h5>
                      <p>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                        clita amet diam
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                      <h5>Quality Food</h5>
                      <p>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                        clita amet diam
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                      <h5>Online Order</h5>
                      <p>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                        clita amet diam
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                      <h5>24/7 Service</h5>
                      <p>
                        Diam elitr kasd sed at elitr sed ipsum justo dolor sed
                        clita amet diam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Service End --> */}

          {/* <!-- About Start --> */}
          <div className="w-100 py-5">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.1s"
                        defer
                        src="static/img/about-1.jpg"
                      />
                    </div>
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.3s"
                        defer
                        src="static/img/about-2.jpg"
                        style={{ marginTop: "25%" }}
                      />
                    </div>
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.5s"
                        defer
                        src="static/img/about-3.jpg"
                      />
                    </div>
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.7s"
                        defer
                        src="static/img/about-4.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    About Us
                  </h5>
                  <h1 className="mb-4">
                    Welcome to{" "}
                    <i className="fa fa-utensils text-primary me-2"></i>Flavour
                    Paradize
                  </h1>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed
                    stet lorem sit.
                  </p>
                  <p className="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1
                          className="flex-shrink-0 display-5 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          15
                        </h1>
                        <div className="ps-4">
                          <p className="mb-0">Years of</p>
                          <h6 className="text-uppercase mb-0">Experience</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1
                          className="flex-shrink-0 display-5 text-primary mb-0"
                          data-toggle="counter-up"
                        >
                          50
                        </h1>
                        <div className="ps-4">
                          <p className="mb-0">Popular</p>
                          <h6 className="text-uppercase mb-0">Master Chefs</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="btn btn-primary py-3 px-5 mt-2" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About End --> */}

          {/* <!-- Menu Start --> */}
          <div className="w-100 py-5">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Food Menu
                </h5>
                <h1 className="mb-5">Most Popular Items</h1>
              </div>
              <div
                className="tab-className text-center wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                      data-bs-toggle="pill"
                      href="#tab-1"
                    >
                      <i className="fa fa-coffee fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small className="text-body">Popular</small>
                        <h6 className="mt-n1 mb-0">Breakfast</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-2"
                    >
                      <i className="fa fa-hamburger fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small className="text-body">Special</small>
                        <h6 className="mt-n1 mb-0">Launch</h6>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                      data-bs-toggle="pill"
                      href="#tab-3"
                    >
                      <i className="fa fa-utensils fa-2x text-primary"></i>
                      <div className="ps-3">
                        <small className="text-body">Lovely</small>
                        <h6 className="mt-n1 mb-0">Dinner</h6>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-1.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-2.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-3.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-4.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-5.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-6.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-7.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-8.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-1.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-2.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-3.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-4.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-5.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-6.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-7.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-8.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-1.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-2.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-3.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-4.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-5.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-6.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-7.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img
                            className="flex-shrink-0 img-fluid rounded"
                            defer
                            src="static/img/menu-8.jpg"
                            alt=""
                            style={{ width: "80px" }}
                          />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>Chicken Burger</span>
                              <span className="text-primary">$115</span>
                            </h5>
                            <small className="fst-italic">
                              Ipsum ipsum clita erat amet dolor justo diam
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Menu End --> */}

          {/* <!-- Reservation Start --> */}
          <div className="w-100 py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="video">
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data="true"
                    defer-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-bs-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                    Reservation
                  </h5>
                  <h1 className="text-white mb-4">Book A Table Online</h1>
                  <form
                    id="userform"
                    name="myForm"
                    action=""
                    // onSubmit={validateForm}
                    method="post"
                    autoComplete="off"
                    aria-required="true"
                  >
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            name="Name"
                            required
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            name="Email"
                            required
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="form-floating date"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <input
                            type="date"
                            className="form-control"
                            id="datetime"
                            placeholder="Date & Time"
                            data-target="#date3"
                            name="Date"
                            required
                          />
                          <label htmlFor="datetime">Date</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <select
                            className="form-select"
                            type="time"
                            id="Time"
                            placeholder="Booking Time"
                            name="Time"
                            required
                          >
                            <option value="9:00">9:00 AM</option>
                            <option value="9:30">9:30 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:30">4:30 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                          </select>
                          <label htmlFor="Time">Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="select1"
                            name="Number_of_people"
                            required
                          >
                            <option value="1">People 1</option>
                            <option value="2">People 2</option>
                            <option value="3">People 3</option>
                          </select>
                          <label htmlFor="select1">No Of People</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="Contact_number"
                            name="Contact_number"
                            placeholder="Enter contact number"
                            required
                          />
                          <label htmlFor="Contact_number">Contact</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Special Request"
                            id="message"
                            style={{ height: "100px" }}
                            name="Special_request"
                            required
                          ></textarea>
                          <label htmlFor="message">Special Request</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <input
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                          value="Submit"
                          id="submitForm"
                          name="Submit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="videoModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Youtube Video
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* <!-- 16:9 aspect ratio --> */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="embed-responsive-item"
                      defer
                      src=""
                      id="video"
                      allowFullScreen
                      allowscriptaccess="always"
                      allow="autoplay"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Reservation Start --> */}

          {/* <!-- Team Start --> */}
          <div className="w-100 pt-5 pb-3">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Team Members
                </h5>
                <h1 className="mb-5">Our Master Chefs</h1>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        defer
                        src="static/img/team-1.jpg"
                        alt=""
                      />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        defer
                        src="static/img/team-2.jpg"
                        alt=""
                      />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        defer
                        src="static/img/team-3.jpg"
                        alt=""
                      />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        defer
                        src="static/img/team-4.jpg"
                        alt=""
                      />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-primary mx-1" href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Team End --> */}

          {/* <!-- Testimonial Start --> */}
          <div className="w-100 py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="text-center">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">
                  Testimonial
                </h5>
                <h1 className="mb-5">Our Clients Say!!!</h1>
              </div>
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      defer
                      src="static/img/testimonial-1.jpg"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      defer
                      src="static/img/testimonial-2.jpg"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      defer
                      src="static/img/testimonial-3.jpg"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      defer
                      src="static/img/testimonial-4.jpg"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Testimonial End --> */}

          {/* <!-- Footer Start --> */}
          <div
            className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container py-5">
              <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                    Company
                  </h4>
                  <a className="btn btn-link" href="">
                    About Us
                  </a>
                  <a className="btn btn-link" href="">
                    Contact Us
                  </a>
                  <a className="btn btn-link" href="">
                    Reservation
                  </a>
                  <a className="btn btn-link" href="">
                    Privacy Policy
                  </a>
                  <a className="btn btn-link" href="">
                    Terms & Condition
                  </a>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                    Contact
                  </h4>
                  <p className="mb-2">
                    <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                    York, USA
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-phone-alt me-3"></i>+012 345 67890
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-envelope me-3"></i>info@example.com
                  </p>
                  <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                    Opening
                  </h4>
                  <h5 className="text-light fw-normal">Monday - Saturday</h5>
                  <p>09AM - 09PM</p>
                  <h5 className="text-light fw-normal">Sunday</h5>
                  <p>10AM - 08PM</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                    Newsletter
                  </h4>
                  <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                  <div
                    className="position-relative mx-auto"
                    style={{ maxWidth: "400px" }}
                  >
                    <input
                      className="form-control border-primary w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Your email"
                    />
                    <button
                      type="button"
                      className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                    >
                      SignUp
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="copyright">
                <div className="row">
                  <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy;{" "}
                    <a className="border-bottom" href="#">
                      Your Site Name
                    </a>
                    , All Right Reserved.
                    {/* <!-- This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.--> */}
                    Designed By{" "}
                    <a className="border-bottom" href="https://htmlcodex.com">
                      HTML Codex
                    </a>
                    <br />
                    <br />
                    Distributed By{" "}
                    <a
                      className="border-bottom"
                      href="https://themewagon.com"
                      target="_blank"
                    >
                      ThemeWagon
                    </a>
                  </div>
                  <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                      <a href="">Home</a>
                      <a href="">Cookies</a>
                      <a href="">Help</a>
                      <a href="">FQAs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer End --> */}

          {/* <!-- Back to Top --> */}
          <a
            href="#"
            className="btn btn-lg btn-primary btn-lg-square back-to-top"
          >
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </main>

      {/* <!-- JavaScript Libraries --> */}

      {/* <Script defer src="app.js"></Script> */}

      {/* <Head>
        <title>{pets[0].title}</title>
        <meta name="deScription" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main classNameName={`${styles.main} ${inter.classNameName}`}>
        <div classNameName={styles.deScription}>
          <p>
            Get started by editing&nbsp;
            <code classNameName={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                defer src="/vercel.svg"
                alt="Vercel Logo"
                classNameName={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div classNameName={styles.center}>
          <Image
            classNameName={styles.logo}
            defer src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div classNameName={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            classNameName={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            classNameName={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            classNameName={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            classNameName={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
        <div>

          <PortableText
            // Pass in block content straight from Sanity.io
            content={pets[0].content}

            projectId="k4wqtbcn"
            dataset="production"
            // Optionally override marks, decorators, blocks, etc. in a flat
            // structure without doing any gymnastics
            serializers={{
              h1: (props) => <h1 style={{{{ color: "red" }} {...props} />,}}
              li: ({ children }) => <li classNameName="special-list-item">{children}</li>,
            }}
          />
        </div>
      </main> */}
    </>
  );
}

const client = createClient({
  projectId: "k4wqtbcn",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getStaticProps() {
  const pets = await client.fetch(`*[_type == "Blog"]`);

  return {
    props: {
      pets,
    },
  };
}
