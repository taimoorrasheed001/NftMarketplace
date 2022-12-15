import React from 'react'

function Register() {
  return (

            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Area*/}
              <header className="header-area">
                <nav className="navbar navbar-expand-lg">
                  <div className="container">
                    {/* Navbar Brand */}<a className="navbar-brand" href="index.html"><img className="light-logo" src="img/core-img/logo.png" /><img className="dark-logo" src="img/core-img/logo-white.png" /></a>
                    {/* Navbar Toggler */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid" /></button>
                    {/* Navbar */}
                    <div className="collapse navbar-collapse" id="funtoNav">
                      <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
                        <li className="ft-dd"><a href="art.html">Art</a>
                          <ul className="ft-dd-menu">
                            <li><a href="artists.html">Artists</a></li>
                            <li><a href="digitize.html">Digitize</a></li>
                            <li><a href="exhibition.html">Exhibitions</a></li>
                          </ul>
                        </li>
                        <li><a href="about-us.html">The Gat3s</a></li>
                        <li><a href="join-us.html">Join us</a></li>
                      </ul>
                      {/* Header Meta */}
                      <div className="header-meta d-flex align-items-center ms-lg-auto">
                        {/* Search Form */}
                        <div className="search-form position-relative d-flex align-items-center">
                          <input className="form-control" type="text" placeholder="Search" />
                          <button className="position-absolute" type="submit"><i className="bi bi-search" /></button>
                        </div>
                        {/* User Dropdown */}
                        {/* <div class="user-dropdown dropdown mx-3">
                      <button class="btn dropdown-toggle user-btn" id="dropdownMenuButton1" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots"></i></button>
                      <ul class="dropdown-menu mt-3" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="dashboard.html"><i class="me-2 bi bi-speedometer2"></i>Dashboard</a>
                        </li>
                        <li><a class="dropdown-item" href="my-collection.html"><i
                              class="me-2 bi bi-collection"></i>Collections</a></li>
                        <li><a class="dropdown-item" href="notifications.html"><i class="me-2 bi bi-bell"></i>Notifications</a>
                        </li>
                        <li><a class="dropdown-item" href="settings.html"><i class="me-2 bi bi-gear"></i>Settings</a></li>
                      </ul>
                    </div> */}
                        {/* Create New Button */}<a className="btn btn-warning btn-sm rounded-pill mx-3" >Connect Wallet</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              {/* Breadcrumb */}
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-content">
                    <h2 className="breadcrumb-title">Register</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Register</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Register */}
              <div className="register-area">
                <div className="container">
                  <div className="row g-4 g-lg-5 align-items-center justify-content-between">
                    <div className="col-12 col-md-6 col-xl-5">
                      <div className="register-card">
                        <h2>Create your free account</h2>
                        <p>Already have an account?<a className="ms-1 hover-primary" href="login.html">Log In</a></p>
                        {/* Register Form*/}
                        <div className="register-form mt-5">
                          <form action="register.html#" method="post">
                            <div className="form-group mb-4">
                              <input className="form-control" type="email" placeholder="Email" required />
                            </div>
                            <div className="form-group mb-4">
                              <input className="form-control" type="text" placeholder="Username" required />
                            </div>
                            <div className="form-group mb-4">
                              <input className="form-control" type="text" placeholder="Full Name" required />
                            </div>
                            <div className="form-group mb-4">
                              <label className="label-psswd" htmlFor="registerPassword">Show</label>
                              <input className="form-control" id="registerPassword" type="password" placeholder="Password" required />
                            </div>
                            <div className="form-check mb-4">
                              <input className="form-check-input" id="rememberMe" type="checkbox" defaultValue defaultChecked />
                              <label className="form-check-label" htmlFor="rememberMe">I agree to all terms &amp; conditions.</label>
                            </div>
                            <button className="btn btn-primary w-100" type="submit">Register Now</button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="register-thumbnail mt-5 mt-md-0"><img src="img/illustrator/4.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Dark Light Wrapper */}
              {/* Footer */}
              <footer className="footer-area pb-120 pt-120" style={{backgroundImage: 'url("img/bg-img/1.jpg")'}}>
                <div className="container">
                  <div className="row">
                    {/* Footer Widget */}
                    <div className="col-12 col-lg-5">
                      <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end"><a className="d-block mb-4" href="index.html"><img className="light-logo" src="img/core-img/logo.png" /><img className="dark-logo" src="img/core-img/logo-white.png" /></a>
                        <p>
                          We seek
                          beauty</p>
                        <p className="mb-0"> Email: <a href="mailto:abc@dummy.com">help@gat3.com</a></p>
                        {/* Social Icon */}
                        <h5 className="mt-4 mb-3">Join the community</h5>
                        <div className="footer-social-icon d-flex align-items-center flex-wrap"><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="discord"><i className="bi bi-discord" style={{fontSize: '20pt'}} /></a><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="bi bi-instagram" style={{fontSize: '20pt'}} /></a><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="bi bi-twitter" style={{fontSize: '20pt'}} /></a><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="Medium"><i className="bi bi-medium" style={{fontSize: '20pt'}} /></a></div>
                        {/* Newsletter Form */}
                      </div>
                    </div>
                    {/* Footer Widget */}
                    <div className="col-12 col-lg-7">
                      <div style={{paddingTop: '105px'}} className="row g-4">
                        <div className="col-6 col-sm-4">
                          <div className="footer-widget-area mb-70">
                            {/* <h5 class="mb-4">Marketplace</h5> */}
                            <ul className="list-unstyled mb-0">
                              <li><a href="about-us.html">About us</a></li>
                              <li><a href="faq.html">FAQ</a></li>
                              <li><a href="privacy-policy.html">Privacy policy </a></li>
                              <li><a href="terms-of-service.html">Terms of services</a></li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <div className="newsletter-form mt-5 me-5">
                            <form className="d-flex align-items-stretch" action="index.html#">
                              <input className="form-control" type="email" placeholder="Enter email" />
                              <button className="btn btn-warning px-3" type="submit">Subscribe</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
                    {/* Copywrite Text */}
                    <div className="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
                      <p className="mb-0">2022 © All rights reserved ®SOC Solutions</p>
                    </div>
                    {/* Footer Nav */}
                    {/* <div class="footer-nav">
                <ul class="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="terms-of-service.html">Terms of Services</a></li>
                </ul>
              </div> */}
                  </div>
                </div>
              </footer>
              {/* Scroll To Top */}
              <div id="scrollTopButton"><i className="bi bi-arrow-up-short" /></div>
              {/* All JavaScript Files*/}
            </div>
      
  )
}

export default Register