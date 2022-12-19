import React from 'react'

function LiveBidsArtist() {
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
                        {/* Create New Button */}<a href='/dashboard' className="btn btn-warning btn-sm rounded-pill mx-3" >Connect Wallet</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              {/* Admin Sidebar Wrap */}
              <div className="admin-sidebar-wrap">
                <div className="overflowY-scroll">
                  {/* User Profile */}
                  <div className="user-profile">
                    {/* User Name */}
                    <div className="user-name mb-5">
                      <div className="d-flex align-items-center"><img src="img/bg-img/u2.jpg" alt="" />
                        <div className="ms-3">
                          <h6 className="lh-1 text-dark fz-18">Designing W.</h6><span className="badge bg-primary fz-12">Premium User</span>
                        </div>
                      </div>
                    </div>
                    {/* Balance */}
                    <div className="card shadow mb-5">
                      <div className="card-body text-center p-4">
                        <h6 className="mb-1">Current balance</h6>
                        <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center"><img className="me-1" src="img/core-img/ethereum.png" alt="" /><span className="counter">4.09685</span><span className="ms-2">ETH</span></h5><a className="btn btn-warning rounded-pill btn-sm w-100 mt-3" href="dashboard.html#">Recharge</a>
                      </div>
                    </div>
                  </div>
                  {/* Sidenav */}
                  <div className="sidenav">
                    <ul>
                      <li>Menu</li>
                      <li><a  href="/dashboard"><i className="bi bi-speedometer" />Dashboard</a></li>
                      <li><a className="active" href="/live_bid"><i className="bi bi-hammer" />Live Bids</a></li>
                      <li><a href="/my_collections"><i className="bi bi-columns-gap" />My Collections</a></li>
                      <li><a href="/create-nft"><i className="bi bi-columns-gap" />Create NFT</a></li>
                      <li><a href="/my_wallet"><i className="bi bi-wallet2" />My Wallet</a></li>
                      {/* <li><a href="notifications.html"><i className="bi bi-bell" />Notifications</a></li> */}
                      <li><a href="/sattings"><i className="bi bi-gear" />Settings</a></li>
                      {/* <li><a href="" aria-disabled><i className="bi bi-" />Create Nft</a></li> */}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <div className="mt-5" />
                    {/* Mode Switching */}
                    <div className="dark-light-mode">
                      <input id="darkLightSwitch" type="checkbox" />
                      <label className="shadow" htmlFor="darkLightSwitch">Toggle</label>
                    </div>
                    <div className="copywrite-text mt-4">
                      <p className="mb-0 fz-14">2022 © All rights reserved by <a className="fz-14" href="dashboard.html#" target="_blank">Designing World</a></p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Create New Button */}
              <div className="create-new-button"><a className="shadow-lg btn btn-warning" href="create-new.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></a></div>
              <div className="admin-wrapper">
                <div className="container">
                  <h5 className="mb-3">Your all live bids</h5>
                  <div className="row g-4">
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownw892" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownw892">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="drodown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="drodown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="drown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="drown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="droprrdown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="droprrdown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropwwdown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropwwdown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="drowzpdown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="drowzpdown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="droxepdown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="droxepdown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-xl-4 col-xxl-3">
                      {/* Featured Card */}
                      <div className="nft-card card border-0">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dreeopdown22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dreeopdown22">
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="live-bids.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                            <div className="col-12"><a className="btn btn-danger rounded-pill btn-sm mt-3 w-100" href="live-bids.html#"><i className="me-1 bi bi-pencil" />Edit this item              </a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* All JavaScript Files*/}
            </div>
       
  )
}

export default LiveBidsArtist