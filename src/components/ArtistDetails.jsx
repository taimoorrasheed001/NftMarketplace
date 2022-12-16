import React from 'react'

function ArtistDetails() {
  return (

            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Area*/}
 
              {/* Share Modal */}
              <div className="share-modal modal fade" id="shareModal" tabIndex={-1} aria-labelledby="shareModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body p-4 text-center">
                      <h4 className="mb-4" id="shareModalLabel">Share this author</h4>
                      <div className="d-flex align-items-center justify-content-center"><a className="mx-2" href="artist-details.html#"><img src="img/core-img/icons8-facebook.svg" alt="" /></a><a className="mx-2" href="artist-details.html#"><img src="img/core-img/icons8-twitter.svg" alt="" /></a><a className="mx-2" href="artist-details.html#"><img src="img/core-img/icons8-instagram.svg" alt="" /></a><a className="mx-2" href="artist-details.html#"><img src="img/core-img/icons8-slack.svg" alt="" /></a><a className="mx-2" href="artist-details.html#"><img src="img/core-img/icons8-player.svg" alt="" /></a></div>
                      <button className="btn btn-danger btn-sm rounded-pill mt-4" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg" />Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Copy Link Modal */}
              <div className="share-modal modal fade" id="copylinkModal" tabIndex={-1} aria-labelledby="copylinkLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body p-4 text-center">
                      <h4 className="mb-4" id="copylinkLabel">Copy author link</h4>
                      <p className="user-select-all mb-0 border border-2 p-3 rounded">
                        https://www.facebook.com/musavir.chishti.7</p>
                      <button className="btn btn-danger btn-sm rounded-pill mt-4" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg" />Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Report Modal */}
              <div className="share-modal modal fade" id="reportModal" tabIndex={-1} aria-labelledby="reportModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body p-4 text-center">
                      <h4 className="mb-4" id="reportModalLabel">Why are you reporting?</h4>
                      <form action="artist-details.html#">
                        <textarea className="form-control mb-3" id="reportText" name="reportMessage" placeholder="Write your complaint..." defaultValue={""} />
                        <div className="d-flex align-items-center justify-content-between">
                          <button className="btn btn-danger btn-sm rounded-pill" type="button" data-bs-dismiss="modal" aria-label="Close"><i className="me-1 bi bi-x-lg" />Close</button>
                          <button className="btn btn-primary btn-sm rounded-pill" type="submit">Report</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Author Top Content */}
              <div className="author-top-content bg-img bg-overlay" style={{backgroundImage: 'url("img/bg-img/44.jpg")'}}>
                <div className="container">
                  <div className="card border-0 bg-transparent">
                    <div className="card-body p-4 p-sm-5">
                      <div className="row g-4 g-lg-5 align-items-center">
                        <div className="col-7 col-sm-4 col-lg-3">
                          <div className="author-thumbnail"><img className="rounded" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-patch-check-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" />
                          </div>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-9">
                          <div className="author-data">
                            <h3 className="mb-2 author-name text-white">Designing World<a className="btn btn-warning btn-sm rounded-pill align-top ms-2 px-3 py-1" href="artist-details.html#">Follow</a>
                            </h3>
                            <div className="btn btn-minimal d-inline-block mb-3 text-white hover-warning">@designing_world</div>
                            <p className="w-75 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quaerat quis
                              similique natus rem.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Author Dropdown */}
                    <div className="dropdown author-dd">
                      <button className="dropdown-toggle" id="dd9887" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                      {/* Dropdown Menu */}
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd9887">
                        <li><a className="dropdown-item" href="artist-details.html#" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="me-1 bi bi-share" />Share</a></li>
                        <li><a className="dropdown-item" href="artist-details.html#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i className="me-1 bi bi-box-arrow-up-right" />Copy Link</a></li>
                        <li><a className="dropdown-item" href="artist-details.html#" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="me-1 bi bi-flag" />Report</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="author-content-wrap mt-70">
                <div className="container">
                  <div className="row g-4 g-xl-5 justify-content-center">
                    <div className="col-12 col-sm-9 col-lg-4">
                      <div className="card author-sidebar-card shadow-sm">
                        <div className="card-body p-4 p-md-5 p-lg-4 p-xl-5">
                          <h5 className="mb-3">About this author</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto ipsum quas, eum eius sint
                            esse, omnis quis voluptas est dicta earum dolore recusandae autem asperiores, sed non. Maxime, eius!</p>
                          <div className="meta-data d-flex align-items-center mt-4">
                            <h6 className="mb-0 border-end text-center pe-3 me-3"><span className="counter">438 </span><br /> Items</h6>
                            <h6 className="mb-0 border-end text-center pe-3 me-3"><span className="counter">861 </span><br /> Owners</h6>
                            <h6 className="mb-0 text-center"><span className="counter">3510 </span><br /> Followers</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="row g-4 align-items-center justify-content-between">
                        <div className="col-12 col-sm-6">
                          <select className="filter-select bg-gray w-100">
                            <option selected value={1}>Recently Added</option>
                            <option value={2}>Recently Sold</option>
                            <option value={3}>Ending Soon</option>
                          </select>
                        </div>
                        <div className="col-12 col-sm-6">
                          <select className="filter-select2 bg-gray w-100">
                            <option selected value={1}>Art</option>
                            <option value={2}>Cards</option>
                            <option value={3}>Collectibles</option>
                            <option value={4}>Domain</option>
                            <option value={5}>Music</option>
                            <option value={6}>Memes</option>
                            <option value={7}>Photos</option>
                            <option value={8}>Sports</option>
                            <option value={9}>Videos</option>
                            <option value={10}>Vitual Worlds</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-4 d-block"> </div>
                      <div className="row g-4">
                        <div className="col-12 col-sm-6 col-lg-6">
                          {/* Featured Card */}
                          <div className="nft-card card shadow-sm">
                            <div className="card-body">
                              <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                                {/* Badge */}
                                <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured
                                </div>
                                {/* Dropdown */}
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd98sd7" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                  {/* Dropdown Menu */}
                                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd98sd7">
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* Others Info */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.861
                                    ETH</span></div>
                                <div className="col-4 text-end">
                                  <button className="wishlist-btn" type="button"><i className="bi" /></button>
                                </div>
                              </div>
                              {/* Meta Info */}
                              <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                  <div className="name-info d-flex align-items-center">
                                    <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                    <h6 className="mb-0">0.861 ETH</h6>
                                  </div>
                                </div>
                              </div>
                              {/* Button */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="artist-details.html#">Place
                                    bid</a>
                                </div>
                                <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"><i className="bi bi-activity me-1" />Activity</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          {/* Featured Card */}
                          <div className="nft-card card shadow-sm">
                            <div className="card-body">
                              <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                                {/* Dropdown */}
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddxx211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                  {/* Dropdown Menu */}
                                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddxx211">
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* Others Info */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 2.961
                                    ETH</span></div>
                                <div className="col-4 text-end">
                                  <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                                </div>
                              </div>
                              {/* Meta Info */}
                              <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                  <div className="name-info d-flex align-items-center">
                                    <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@creative_art</a></div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                    <h6 className="mb-0">2.961 ETH</h6>
                                  </div>
                                </div>
                              </div>
                              {/* Button */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="artist-details.html#">Place
                                    bid</a>
                                </div>
                                <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          {/* Featured Card */}
                          <div className="nft-card card shadow-sm">
                            <div className="card-body">
                              <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                                {/* Dropdown */}
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddsdff87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                  {/* Dropdown Menu */}
                                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddsdff87">
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* Others Info */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.06
                                    ETH</span></div>
                                <div className="col-4 text-end">
                                  <button className="wishlist-btn" type="button"><i className="bi" /></button>
                                </div>
                              </div>
                              {/* Meta Info */}
                              <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                  <div className="name-info d-flex align-items-center">
                                    <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@designing_world</a></div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                    <h6 className="mb-0">0.06 ETH</h6>
                                  </div>
                                </div>
                              </div>
                              {/* Button */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="artist-details.html#">Place
                                    bid</a>
                                </div>
                                <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                          {/* Featured Card */}
                          <div className="nft-card card shadow-sm">
                            <div className="card-body">
                              <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                                {/* Badge */}
                                <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                                {/* Dropdown */}
                                <div className="dropdown">
                                  <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dde74e" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                  {/* Dropdown Menu */}
                                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dde74e">
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                    <li><a className="dropdown-item" href="artist-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* Others Info */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.01
                                    ETH</span></div>
                                <div className="col-4 text-end">
                                  <button className="wishlist-btn" type="button"><i className="bi" /></button>
                                </div>
                              </div>
                              {/* Meta Info */}
                              <div className="row gx-2 align-items-center mt-2">
                                <div className="col-8">
                                  <div className="name-info d-flex align-items-center">
                                    <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                    <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                    <h6 className="mb-0">0.01 ETH</h6>
                                  </div>
                                </div>
                              </div>
                              {/* Button */}
                              <div className="row gx-2 align-items-center mt-3">
                                <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="artist-details.html#">Place
                                    bid</a>
                                </div>
                                <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Dark Light Wrapper */}
              {/* Footer */}
              <footer
        className="footer-area pb-120 pt-120"
        style={{ backgroundImage: 'url("img/bg-img/1.jpg")' }}
      >
        <div className="container">
          <div className="row">
            {/* Footer Widget */}
            <div className="col-12 col-lg-5">
              <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end">
                <a className="d-block mb-4" href="index.html">
                  <img className="light-logo" src="img/core-img/logo.png" alt='img
                  '/>
                  <img
                    className="dark-logo"
                    src="img/core-img/logo-white.png"
                    alt='img'
                  />
                </a>
                <p>We seek beauty</p>
                <p className="mb-0">
                  {" "}
                  Email: <a href="mailto:abc@dummy.com">help@gat3.com</a>
                </p>
                {/* Social Icon */}
                <h5 className="mt-4 mb-3">Join the community</h5>
                <div className="footer-social-icon d-flex align-items-center flex-wrap">
                  <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="discord"
                  >
                    <i className="bi bi-discord" style={{ fontSize: "20pt" }} />
                  </a>
                  <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "20pt" }}
                    />
                  </a>
                  <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="bi bi-twitter" style={{ fontSize: "20pt" }} />
                  </a>
                  <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Medium"
                  >
                    <i className="bi bi-medium" style={{ fontSize: "20pt" }} />
                  </a>
                </div>
                {/* Newsletter Form */}
              </div>
            </div>
            {/* Footer Widget */}
            <div className="col-12 col-lg-7">
              <div className="row g-4">
                <div className="col-6 col-sm-4">
                  <div className="footer-widget-area mb-70">
                    <h5 class="mb-4">Marketplace</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="/art">Art</a>
                      </li>
                      <li>
                        <a href="/artist">Artists</a>
                      </li>
                      <li>
                        <a href="/exhibitions">Exhibitions</a>
                      </li>
                      <li>
                        <a href="/digitize">Digitize</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-sm-4">
                  <div className="footer-widget-area mb-70">
                    <h5 class="mb-4">Admin</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="about-us.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="faq.html">My Wallet</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">My Collection </a>
                      </li>
                      <li>
                        <a href="terms-of-service.html">Setting</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-6 col-sm-4">
                  <div className="footer-widget-area mb-70">
                    <h5 class="mb-4">The Get3s</h5>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="faq.html">Join Us</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Newsletter</a>
                      </li>
                      <li>
                        <a href="terms-of-service.html">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="newsletter-form mt-5 me-5">
                    <form
                      className="d-flex align-items-stretch"
                      action="index.html#"
                    >
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter email"
                      />
                      <button className="btn btn-warning px-3" type="submit">
                        Subscribe
                      </button>
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

export default ArtistDetails