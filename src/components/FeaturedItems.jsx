import React from 'react'

function FeaturedItems() {
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
                    <h2 className="breadcrumb-title">Featured</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Featured</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              <div className="featured-items-wrapper">
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/40.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownw21" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownw21">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.061 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Cowboy Riding Bull Nature">Cowboy Riding Bull Nature</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.061 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/41.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />New</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown72" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown72">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.78 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Chicken Wearing Santa Hats">Chicken Wearing Santa Hats</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@style_wear</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.96 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/42.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown43" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown43">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 1.065 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Diamond Animals">Diamond Animals</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@affan</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">1.065 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/43.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowhhn4" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowhhn4">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.98 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="NFT Line Vector Illustration">NFT Line Vector Illustration</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.98 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/40.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownq1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownq1">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.061 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Cowboy Riding Bull Nature">Cowboy Riding Bull Nature</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.061 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/41.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />New</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownqq2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownqq2">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.78 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Chicken Wearing Santa Hats">Chicken Wearing Santa Hats</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@style_wear</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.96 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/42.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown633" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown633">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 1.065 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Diamond Animals">Diamond Animals</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@affan</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">1.065 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/43.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowncv4" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowncv4">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.98 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="NFT Line Vector Illustration">NFT Line Vector Illustration</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.98 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/41.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />New</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownaq2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownaq2">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.78 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Chicken Wearing Santa Hats">Chicken Wearing Santa Hats</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@style_wear</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.96 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/42.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownss3" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownss3">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 1.065 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Diamond Animals">Diamond Animals</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@affan</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">1.065 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/43.jpg" alt="" />
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownnm4" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownnm4">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.98 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="NFT Line Vector Illustration">NFT Line Vector Illustration</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.98 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card featured-card border-0 bg-gray">
                        <div className="img-wrap"><img src="img/bg-img/41.jpg" alt="" />
                          {/* Badge */}
                          <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />New</div>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownsd2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                            {/* Dropdown Menu */}
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownsd2">
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-share" />Share</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                              <li><a className="dropdown-item" href="featured-items.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.78 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Chicken Wearing Santa Hats">Chicken Wearing Santa Hats</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@style_wear</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.96 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="featured-items.html#">Place Bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="featured-items.html#">Load more<i className="ms-1 bi bi-arrow-repeat" /></a></div>
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

export default FeaturedItems