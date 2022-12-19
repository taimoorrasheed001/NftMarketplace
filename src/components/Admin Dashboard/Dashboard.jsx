import React from 'react'
import { tns } from 'tiny-slider';
// import slideToggle from "react-slide-toggle";
import {useEffect} from 'react';

function Dashboard() {

  useEffect(() => {
    if (document.querySelectorAll('.featured-nfts-slide').length > 0) {
      tns({
          'container': '.featured-nfts-slide',
          'items': 4,
          'gutter': 24,
          'slideBy': 1,
          'autoplay': true,
          'autoplayButtonOutput': false,
          'autoplayTimeout': 5000,
          'speed': 900,
          'loop': true,
          'mouseDrag': true,
          'nav': false,
          'controls': true,
          'controlsPosition': 'top',
          'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
          'responsive': {
              320: {
                  'items': 1,
              },
              480: {
                  'items': 1.3,
              },
              576: {
                  'items': 1.5,
              },
              768: {
                  'items': 2.4,
              },
              992: {
                  'items': 3,
              },
              1200: {
                  'items': 3.5,
              },
              1400: {
                  'items': 4,
              }
          }
      });
  }
  //mobileDropdownMenu fucntion
  
//   function mobileDropdownMenu() {
//     let sbdropdown = document.querySelectorAll('.ft-dd').length;

//     if (sbdropdown > 0) {
//         let navUrl = document.querySelectorAll('.navbar-nav li ul');
//         let navUrlLen = navUrl.length;

//         for (let i = 0; i < navUrlLen; i++) {
//             navUrl[i].insertAdjacentHTML('beforebegin', '<div class="dropdown-toggler"><i class="bi bi-caret-down-fill"></i></div>');
//         }

//         let ddtroggler = document.querySelectorAll('.dropdown-toggler');
//         let ddtrogglerlen = ddtroggler.length;

//         for (let i = 0; i < ddtrogglerlen; i++) {
//             ddtroggler[i].addEventListener('click', function () {
//                 let ddNext = ddtroggler[i].nextElementSibling;
//                 slideToggle(ddNext, 300);
//             });
//         }
//     }
// }

// window.addEventListener('load', mobileDropdownMenu);
// sticky header


let navarToggler = document.querySelector('.navbar-toggler');
let header = document.querySelector('.header-area');

if (navarToggler) {
    navarToggler.addEventListener('click', function () {
        header.classList.toggle('mobile-menu-open');
        header.classList.add('sticky-on');
     
    });
}

if (header) {
    function stickyNavigation() {
        if (window.pageYOffset > 10) {
            header.classList.add('sticky-on');
        } else {
            header.classList.remove('sticky-on');
        }
    }

    window.addEventListener('load', stickyNavigation);
    window.addEventListener('scroll', stickyNavigation);
}

// :: Anchor Prevent Default

let anchor = document.querySelectorAll('a[href="#"]');
let anchorLength = anchor.length;

if (anchorLength > 0) {
    for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
}


// :: Related Project Slide

if (document.querySelectorAll('.related-project-slide').length > 0) {
  tns({
      'container': '.related-project-slide',
      'items': 4,
      'gutter': 24,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'controls': true,
      'nav': false,
      'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
      'responsive': {
          320: {
              'items': 1,
          },
          480: {
              'items': 1.3,
          },
          576: {
              'items': 1.5,
          },
          768: {
              'items': 2.4,
          },
          992: {
              'items': 3,
          },
          1200: {
              'items': 3.5,
          },
          1400: {
              'items': 4,
          }
      }
  });
}


// :: Trending Auction Slide

if (document.querySelectorAll('.trending-auction-slide').length > 0) {
  tns({
      'container': '.trending-auction-slide',
      'items': 2,
      'gutter': 24,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'controls': false,
      'nav': false,
      'responsive': {
          320: {
              'items': 1,
          },
          576: {
              'items': 1.8,
          },
          768: {
              'items': 2.5,
          },
          992: {
              'items': 2,
          },
          1200: {
              'items': 2.5,
          },
          1400: {
              'items': 1.75,
          }
      }
  });
}

// :: Top Buyer Slide

if (document.querySelectorAll('.top-buyer-slide').length > 0) {
  tns({
      'container': '.top-buyer-slide',
      'items': 7,
      'gutter': 16,
      'slideBy': 1,
      'autoplay': true,
      'autoplayButtonOutput': false,
      'autoplayTimeout': 5000,
      'speed': 750,
      'loop': true,
      'mouseDrag': true,
      'nav': false,
      'controls': true,
      'controlsPosition': 'top',
      'controlsText': [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
      'responsive': {
          320: {
              'items': 3,
          },
          480: {
              'items': 4,
          },
          576: {
              'items': 5,
          },
          768: {
              'items': 4,
          },
          992: {
              'items': 4,
          },
          1200: {
              'items': 5,
          },
          1400: {
              'items': 7,
          }
      }
  });
}



  }, []);

  return (
    
            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Header Wrapper */}
              <header className="header-area dashboard-header px-0 px-sm-0">
                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <div className="d-flex align-items-center">
                      {/* Brand Logo */}
                      <div className="admin-logo me-1 me-sm-3"><img src="img/core-img/dashboard-logo.png" alt="" /></div>
                      {/* Search Form */}
                      <div className="search-form position-relative d-flex align-items-center">
                        <input className="form-control" type="text" placeholder="Search" />
                        <button className="position-absolute" type="submit"><i className="bi bi-search" /></button>
                      </div>
                    </div>
                    {/* Header Meta */}
                    <div className="header-meta d-flex align-items-center">
                      {/* Notification */}
                      <div className="user-dropdown dropdown mx-2 mx-sm-3">
                        <button className="btn dropdown-toggle user-btn" id="dd10" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="img/core-img/notification.png" alt="" /></button>
                        <ul className="dropdown-menu noti-dd-menu dropdown-menu-end mt-3" aria-labelledby="dd10">
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="me-2 bi bi-percent" />You have an offer!</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-info me-2 bi bi-tags" />Congratulations! You sale an item.</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-danger me-2 bi bi-gift" />January freebies have arrived.</a></li>
                          <li><a className="dropdown-item" href="dashboard.html#"><i className="bg-warning me-2 bi bi-star" />A new rating has been received.</a></li>
                          <li><a className="dropdown-item justify-content-center" href="notifications.html">View all notifications</a></li>
                        </ul>
                      </div>
                      {/* User Dropdown */}
                      <div className="user-dropdown dropdown">
                        <button className="btn dropdown-toggle user-btn" id="dd20" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="img/core-img/user.png" alt="" /></button>
                        <ul className="dropdown-menu dropdown-menu-end mt-3" aria-labelledby="dd20">
                          <li><a className="dropdown-item" href="dashboard.html"><i className="me-2 bi bi-person-circle" />Dashboard</a></li>
                          <li><a className="dropdown-item" href="live-bids.html"><i className="me-2 bi bi-hammer" />My bids</a></li>
                          <li><a className="dropdown-item" href="my-collection.html"><i className="me-2 bi bi-collection" />Collection</a></li>
                          <li><a className="dropdown-item" href="settings.html"><i className="me-2 bi bi-gear" />Settings</a></li>
                        </ul>
                      </div>
                      {/* Menu Toggler */}
                      <div className="menu-toggler ms-2 ms-sm-3" id="dashboardMenuTrigger"><i className="bi bi-list" /></div>
                      {/* Button */}<a className="btn btn-sm btn-danger rounded-pill ms-2 ms-sm-3 d-none d-sm-block" href="index.html"><i className="bi bi-eye me-1" />Frontend</a>
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
                      <li><a className="active" href="/dashboard"><i className="bi bi-speedometer" />Dashboard</a></li>
                      <li><a href="/live_bid"><i className="bi bi-hammer" />Live Bids</a></li>
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
                  <div className="row g-4">
                    <div className="col-12 col-xxl-6">
                      <div className="row g-4">
                        {/* Welcome Card */}
                        <div className="col-12">
                          <div className="card dashboard-hero-card p-2 border-0 bg-img shadow-sm" style={{backgroundImage: 'url("img/bg-img/44.jpg")'}}>
                            <div className="card-body p-4">
                              <h3 className="mb-3 text-white">Explore, buy, and sell exceptional NFTs.</h3>
                              <p className="mb-4 text-white">It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
                              <div className="button-groups"><a className="btn btn-sm btn-warning rounded-pill me-3" href="dashboard.html#">Discover</a><a className="btn btn-sm btn-dark rounded-pill" href="dashboard.html#">Create</a></div>
                            </div>
                          </div>
                        </div>
                        {/* Statistic Card */}
                        <div className="col-12 col-sm-6">
                          <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5 className="mb-2">Sales</h5><span>Last 10 days</span>
                                </div>
                                <div className="ms-auto" id="chart-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Statistic Card */}
                        <div className="col-12 col-sm-6">
                          <div className="card border-0 shadow-sm">
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h5 className="mb-2">Revenue</h5><span>Last 10 days</span>
                                </div>
                                <div className="ms-auto" id="chart-2" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xxl-6">
                      {/* Monthly Visitor */}
                      <div className="col-12">
                        <div className="card border-0 shadow-sm">
                          <div className="card-body p-4 pb-0">
                            <h5 className="ms-3">Monthly Visitors</h5>
                            <div id="chart-timeline" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xxl-6">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                            <h5>Activity</h5>
                            <ul className="nav nav-tabs border-0 mb-2" id="funtoTab" role="tablist">
                              <li className="nav-item"><a className="rounded-pill btn btn-sm btn-primary me-1 active" id="tab--1" data-bs-toggle="tab" href="dashboard.html#tab1" role="tab" aria-controls="tab1" aria-selected="true">Today</a></li>
                              <li className="nav-item"><a className="rounded-pill btn btn-sm btn-primary me-1" id="tab--2" data-bs-toggle="tab" href="dashboard.html#tab2" role="tab" aria-controls="tab2" aria-selected="false">7 days</a></li>
                              <li className="nav-item"><a className="rounded-pill btn btn-sm btn-primary" id="tab--3" data-bs-toggle="tab" href="dashboard.html#tab3" role="tab" aria-controls="tab3" aria-selected="false">30 days</a></li>
                            </ul>
                          </div>
                          <div className="tab-content">
                            {/* Tab Pane*/}
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                              <div className="table-responsive border shadow-sm dashboard-table activity-table">
                                <table className="table mb-0">
                                  <tbody>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />29 min ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />1h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                                      <td><i className="bi bi-patch-exclamation" />Alert</td>
                                      <td><i className="bi bi-clock" />2h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />3h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />12h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />17h ago</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {/* Tab Pane*/}
                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                              <div className="table-responsive border shadow-sm activity-table">
                                <table className="table mb-0">
                                  <tbody>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />29 min ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />1h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                                      <td><i className="bi bi-patch-exclamation" />Alert</td>
                                      <td><i className="bi bi-clock" />2h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />3h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />12h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />17h ago</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {/* Tab Pane*/}
                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                              <div className="table-responsive border shadow-sm activity-table">
                                <table className="table mb-0">
                                  <tbody>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />29 min ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />1h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                                      <td><i className="bi bi-patch-exclamation" />Alert</td>
                                      <td><i className="bi bi-clock" />2h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />3h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                      <td><i className="bi bi-cart" />Sales</td>
                                      <td><i className="bi bi-clock" />12h ago</td>
                                    </tr>
                                    <tr>
                                      <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="dashboard.html#"> <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                      <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                      <td><i className="bi bi-percent" />Offer</td>
                                      <td><i className="bi bi-clock" />17h ago</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Treading Auctions */}
                    <div className="col-12 col-xxl-6">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3"><img className="me-1" src="img/core-img/fire2.png" alt="" />
                            <h5 className="mb-0">Trending Auctions</h5>
                          </div>
                          <div className="trending-auction-slide">
                            <div>
                              <div className="nft-card card border-0 bg-gray">
                                <div className="card-body">
                                  <div className="img-wrap"><img src="img/bg-img/9.jpg" alt="" />
                                    {/* Badge */}
                                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownqc22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                      {/* Dropdown Menu */}
                                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownqc22">
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="dashboard.html#">Place Bid</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="nft-card card border-0 bg-gray">
                                <div className="card-body">
                                  <div className="img-wrap"><img src="img/bg-img/10.jpg" alt="" />
                                    {/* Badge */}
                                    <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownvb22" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                      {/* Dropdown Menu */}
                                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownvb22">
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100" href="dashboard.html#">Place Bid</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="nft-card card border-0 bg-gray">
                                <div className="card-body">
                                  <div className="img-wrap"><img src="img/bg-img/11.jpg" alt="" />
                                    {/* Badge */}
                                    <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Bid Done</div>
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown282" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                      {/* Dropdown Menu */}
                                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown282">
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-12"><a className="btn btn-primary rounded-pill btn-sm mt-3 w-100 disabled" href="dashboard.html#">Place Bid</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="nft-card card border-0 bg-gray">
                                <div className="card-body">
                                  <div className="img-wrap"><img src="img/bg-img/12.jpg" alt="" />
                                    {/* Badge */}
                                    <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />Hot Bid</div>
                                    {/* Dropdown */}
                                    <div className="dropdown">
                                      <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdown42r2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                      {/* Dropdown Menu */}
                                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown42r2">
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                        <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-12"><a className="btn btn-warning rounded-pill btn-sm mt-3 w-100" href="dashboard.html#">Place Bid</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5>Top NFTs</h5><a className="btn btn-primary btn-minimal" href="dashboard.html#">View all NFTs</a>
                          </div>
                          <div className="row g-4 justify-content-center">
                            <div className="col-12 col-sm-6 col-xl-4">
                              <div className="nft-card card featured-card border-0 bg-gray">
                                <div className="img-wrap"><img src="img/bg-img/40.jpg" alt="" />
                                  {/* Badge */}
                                  <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                                  {/* Dropdown */}
                                  <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdowns1" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                    {/* Dropdown Menu */}
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdowns1">
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="dashboard.html#">Place Bid</a></div>
                                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-4">
                              <div className="nft-card card featured-card border-0 bg-gray">
                                <div className="img-wrap"><img src="img/bg-img/41.jpg" alt="" />
                                  {/* Badge */}
                                  <div className="badge bg-danger position-absolute"><img src="img/core-img/fire.png" alt="" />New</div>
                                  {/* Dropdown */}
                                  <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownxs2" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                    {/* Dropdown Menu */}
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownxs2">
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="dashboard.html#">Place Bid</a></div>
                                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-xl-4">
                              <div className="nft-card card featured-card border-0 bg-gray">
                                <div className="img-wrap"><img src="img/bg-img/42.jpg" alt="" />
                                  {/* Dropdown */}
                                  <div className="dropdown">
                                    <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dropdownqw3" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                                    {/* Dropdown Menu */}
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownqw3">
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                      <li><a className="dropdown-item" href="dashboard.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                    <div className="col-6"><a className="btn btn-primary rounded-pill btn-sm" href="dashboard.html#">Place Bid</a></div>
                                    <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-8">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4 pb-3">
                          <div className="d-flex align-items-center"><img className="me-1" src="img/core-img/ethereum.png" alt="" />
                            <h5 className="mb-0">Price History</h5>
                          </div>
                          <div id="chart-price" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5>Top Seller</h5><a className="btn btn-primary btn-minimal" href="dashboard.html#">View all</a>
                          </div>
                          {/* Single Card */}
                          <div className="nft-card card seller-card shadow-sm mb-4">
                            <div className="card-body">
                              <div className="row align-items-center g-3">
                                <div className="col-4">
                                  <div className="img-wrap"><img src="img/bg-img/u1.jpg" alt="" />
                                    <div className="badge bg-danger position-absolute px-2 py-1">#1</div>
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="dashboard.html#">Designing World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></a><a className="author d-block fz-14 hover-primary text-truncate" href="dashboard.html#">@designing_world</a>
                                    <div className="price-bid d-flex align-items-center mt-3">
                                      <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />3,057 Items</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Single Card */}
                          <div className="nft-card card seller-card shadow-sm">
                            <div className="card-body">
                              <div className="row align-items-center g-3">
                                <div className="col-4">
                                  <div className="img-wrap"><img src="img/bg-img/u2.jpg" alt="" />
                                    <div className="badge bg-danger position-absolute px-2 py-1">#2</div>
                                  </div>
                                </div>
                                <div className="col-8">
                                  <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="dashboard.html#">Art World<i className="bi bi-patch-check-fill ms-2 text-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified" /></a><a className="author d-block fz-14 hover-primary text-truncate" href="dashboard.html#">@art_world</a>
                                    <div className="price-bid d-flex align-items-center mt-3">
                                      <p className="mb-0 lh-1 d-flex align-items-center fz-14"><i className="me-1 bi bi-gem" />671 Items</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-6">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <h5 className="mb-3">Top Authors</h5>
                          <div className="top-author-slide-wrap">
                            <div className="top-authors-slide">
                              <div><a href="dashboard.html#"><img src="img/bg-img/u1.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u2.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u3.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u4.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u1.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u2.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u3.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u4.jpg" alt="" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6">
                      <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">
                          <h5 className="mb-3">Top Buyers</h5>
                          <div className="top-buyer-slide-wrap">
                            <div className="top-buyer-slide">
                              <div><a href="dashboard.html#"><img src="img/bg-img/u1.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u2.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u3.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u4.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u1.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u2.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u3.jpg" alt="" /></a></div>
                              <div><a href="dashboard.html#"><img src="img/bg-img/u4.jpg" alt="" /></a></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* All JavaScript Files*/}
            </div>
      
  )
}

export default Dashboard