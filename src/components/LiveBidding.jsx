import React from 'react'

function LiveBidding() {
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
                    {/* Navbar Brand */}<a className="navbar-brand" href="index.html"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img' /></a>
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
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="spinner-grow text-danger me-1" role="status"><span className="visually-hidden">Loading...</span></div>
                      <h2 className="breadcrumb-title mb-0">Live Bids</h2>
                    </div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Live Bids</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="live-bids-wrapper">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowne22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowne22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="March 31, 2023 14:19:54">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />3 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown422" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown422">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />11 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown922" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown922">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="Feb 28, 2023 12:34:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />Not available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowne3222" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowne3222">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />29 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_nft</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownty22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownty22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="March 31, 2023 14:19:54">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />3 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownx22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />11 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownxx22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownxx22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="Feb 28, 2023 12:34:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />Not available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowngg22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowngg22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />29 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_nft</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownhh22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownhh22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="March 31, 2023 14:19:54">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />3 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Fancy Car">Fancy Car</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownww22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownww22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="April 4, 2023 00:00:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />11 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Animal Playing with Guiter">Animal Playing with Guiter</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownaa22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownaa22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="Feb 28, 2023 12:34:00">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />Not available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Halloween #471">Halloween #471</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_car</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowngh22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowngh22">
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bidding.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                            {/* Bid End */}
                            <div className="bid-ends" data-date="December 31, 2022 14:19:39">
                              <div><span className="days" /><span>Days</span></div>
                              <div><span className="hours" /><span>Hours</span></div>
                              <div><span className="minutes" /><span>Min</span></div>
                              <div><span className="seconds" /><span>Sec</span></div>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-bag me-1" />29 stock available</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Vigor Dance">Vigor Dance</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@fancy_nft</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.784 ETH</h6>
                              </div>
                            </div>
                            <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="live-bidding.html#">Place Bid</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="live-bidding.html#">Load more<i className="ms-1 bi bi-arrow-repeat" /></a></div>
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
                      <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end"><a className="d-block mb-4" href="index.html"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img' /></a>
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

export default LiveBidding