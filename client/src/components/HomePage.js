import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faLaptopCode, faGlobe, faHeart, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Main() {
    return (
        <>

            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">
                                This app is for Blood Donation Management.
                        </h1>
                            <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">
                                This app is for Blood Donation Management.
                            </p>
                            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                                Find Out More
                        </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- About--> */}
            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">
                                We've got what you need!
                           </h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">
                                Blood Donation has everything you need to management hospitals!
                            </p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Services--> */}
            <section className="page-section" id="services">
                <div className="container">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <FontAwesomeIcon icon={faGem} color="#03A9F4" size="5x" />
                                <h3 className="h4 mb-2">Free Account</h3>
                                <p className="text-muted mb-0">This app is for Blood Donation Management.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <FontAwesomeIcon icon={faLaptopCode} color="#03A9F4" size="5x" />
                                <h3 className="h4 mb-2">Up to Date</h3>
                                <p className="text-muted mb-0">This app is for Blood Donation Management.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <FontAwesomeIcon icon={faGlobe} color="#03A9F4" size="5x" />
                                <h3 className="h4 mb-2">Ready to Publish</h3>
                                <p className="text-muted mb-0">This app is for Blood Donation Management.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <FontAwesomeIcon icon={faHeart} color="#03A9F4" size="5x" />
                                <h3 className="h4 mb-2">Made with Love</h3>
                                <p className="text-muted mb-0">This app is for Blood Donation Management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Portfolio--> */}
            {/* <section id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg"
                        ><img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div></a
                        >
                    </div>
                </div>
            </div>
        </section> */}


            {/* <section className="page-section bg-dark text-white">
            <div className="container text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/themes/creative/">Download Now!</a>
            </div>
        </section> */}

            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="mt-0">Let's Get In Touch!</h2>
                            <hr className="divider my-4" />
                            <p className="text-muted mb-5">This app is for Blood Donation Management.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                            <FontAwesomeIcon icon={faPhone} size="3x" />
                            <div>+1 (555) 123-4567</div>
                        </div>
                        <div className="col-lg-4 mr-auto text-center">
                            <FontAwesomeIcon icon={faEnvelope} size="3x" />
                            <a className="d-block" href="mailto:contact@blood.com">contact@blood.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

