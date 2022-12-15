import React from 'react'

function Activity() {
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
                    {/* Navbar Brand */}<a className="navbar-brand" href="index.html"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img'/></a>
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
                        {/* Create New Button */}<a href='/' className="btn btn-warning btn-sm rounded-pill mx-3" >Connect Wallet</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              {/* Breadcrumb */}
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-content">
                    <h2 className="breadcrumb-title">Activity</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Activity</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="activity-wrapper">
                <div className="container">
                  <div className="row g-4 justify-content-between">
                    <div className="col-12 col-sm-6 col-lg-3">
                      <form action="activity.html#"> 
                        <input className="form-control" type="search" placeholder="Search" />
                      </form>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>All</option>
                        <option value={2}>Purchase</option>
                        <option value={3}>Offer</option>
                        <option value={4}>Auctions</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4 d-block w-100" />
                <div className="container">
                  <div className="table-responsive border shadow-sm activity-table mb-70">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Item</th>
                          <th scope="col">Price</th>
                          <th scope="col">Author</th>
                          <th scope="col">Event</th>
                          <th scope="col">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />29 min ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                          <td><i className="bi bi-percent" />Offer</td>
                          <td><i className="bi bi-clock" />1h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                          <td><i className="bi bi-patch-exclamation" />Alert</td>
                          <td><i className="bi bi-clock" />2h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />3h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />12h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                          <td><i className="bi bi-percent" />Offer</td>
                          <td><i className="bi bi-clock" />17h ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                          <td><i className="bi bi-patch-exclamation" />Alert</td>
                          <td><i className="bi bi-clock" />1d ago</td>
                        </tr>
                        <tr>
                          <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="item-details.html"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                          <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                          <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                          <td><i className="bi bi-cart" />Sales</td>
                          <td><i className="bi bi-clock" />3d ago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Pagination             */}
                <div className="funto-pagination">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item active"><a className="page-link" href="activity.html#">1</a></li>
                      <li className="page-item"><a className="page-link" href="activity.html#">2</a></li>
                      <li className="page-item"><a className="page-link" href="activity.html#">3</a></li>
                      <li className="page-item"><a className="page-link" href="activity.html#">4</a></li>
                      <li className="page-item"><a className="page-link" href="activity.html#">...</a></li>
                      <li className="page-item"><a className="page-link" href="activity.html#">9</a></li>
                    </ul>
                  </nav>
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
                      <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end"><a className="d-block mb-4" href="index.html"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img'/></a>
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

export default Activity