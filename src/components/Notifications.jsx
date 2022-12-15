import React from 'react'

function Notifications() {
  return (
    <>

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
                  {/* Create New Button */}<a className="btn btn-warning btn-sm rounded-pill mx-3" href="connect-wallet.html">Connect Wallet</a>
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
                  <h6 className="mb-1">Your current balance</h6>
                  <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center"><img className="me-1" src="img/core-img/ethereum.png" alt="" /><span className="counter">4.09685</span><span className="ms-2">ETH</span></h5><a className="btn btn-warning rounded-pill btn-sm w-100 mt-3" href="notifications.html#">Recharge</a>
                </div>
              </div>
            </div>
            {/* Sidenav */}
            <div className="sidenav">
              <ul>
                <li>Menu</li>
                <li><a href="dashboard.html"><i className="bi bi-speedometer" />Dashboard</a></li>
                <li><a href="live-bids.html"><i className="bi bi-hammer" />Live Bids</a></li>
                <li><a href="my-collection.html"><i className="bi bi-columns-gap" />My Collections</a></li>
                <li><a href="my-wallet.html"><i className="bi bi-wallet2" />My Wallet</a></li>
                <li><a className="active" href="notifications.html"><i className="bi bi-bell" />Notification</a></li>
                <li><a href="settings.html"><i className="bi bi-gear" />Settings</a></li>
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
                <p className="mb-0 fz-14">2022 © All rights reserved by <a className="fz-14" href="notifications.html#" target="_blank">Designing World</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* Create New Button */}
        <div className="create-new-button"><a className="shadow-lg btn btn-warning" href="create-new.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg" /></a></div>
        <div className="admin-wrapper">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-lg-10">
                <ul className="nav nav-tabs border-0 mb-3" role="tablist">
                  <li className="nav-item"><a className="position-relative nav-link mb-0 rounded-pill px-3 py-1 border-0 shadow-sm me-1 active" id="tab--1" data-bs-toggle="tab" href="notifications.html#tab1" role="tab" aria-controls="tab1" aria-selected="true">Today<span className="badge bg-danger rounded-pill position-absolute top-0 left-100 translate-middle">3</span></a></li>
                  <li className="nav-item"><a className="nav-link mb-0 rounded-pill px-3 py-1 border-0 shadow-sm me-1" id="tab--2" data-bs-toggle="tab" href="notifications.html#tab2" role="tab" aria-controls="tab2" aria-selected="false">7 days</a></li>
                  <li className="nav-item"><a className="nav-link mb-0 rounded-pill px-3 py-1 border-0 shadow-sm me-1" id="tab--3" data-bs-toggle="tab" href="notifications.html#tab3" role="tab" aria-controls="tab3" aria-selected="false">All</a></li>
                </ul>
                <div className="tab-content">
                  {/* Tab Pane*/}
                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                    <div className="notification-content-wrap">
                      <ul className="notification-list ps-0 mb-0">
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.<span className="badge bg-dark fz-12 rounded-pill ms-auto">New</span></a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Tab Pane*/}
                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                    <div className="notification-content-wrap">
                      <ul className="notification-list ps-0 mb-0">
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* Tab Pane*/}
                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                    <div className="notification-content-wrap">
                      <ul className="notification-list ps-0 mb-0">
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                        <li><a href="notifications.html#"><i className="me-1 bi bi-percent" />You have an offer!</a></li>
                        <li><a href="notifications.html#"><i className="bg-info me-1 bi bi-tags" />Congratulations! You sale an item.</a></li>
                        <li><a href="notifications.html#"><i className="bg-danger me-1 bi bi-gift" />January freebies have arrived.</a></li>
                        <li><a href="notifications.html#"><i className="bg-warning me-1 bi bi-star" />A new rating has been received.</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All JavaScript Files*/}
      </div>
    
    </>
  )
}

export default Notifications