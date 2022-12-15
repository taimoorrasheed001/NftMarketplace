import React from 'react'
import { tns } from 'tiny-slider';
import {useEffect} from 'react';

function ArtDetails() {
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

  }, []);


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
          {/* Navbar Brand */}<a className="navbar-brand" href="/"><img className="light-logo" src="img/core-img/logo.png" alt='img' /><img className="dark-logo" src="img/core-img/logo-white.png" alt='img' /></a>
          {/* Navbar Toggler */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#funtoNav" aria-controls="funtoNav" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-grid" /></button>
          {/* Navbar */}
          <div className="collapse navbar-collapse" id="funtoNav">
            <div className="search-form position-relative d-flex align-items-center">
              <input className="form-control" type="text" placeholder="Search" />
              <button className="position-absolute" type="submit" />
            </div>
            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center ms-lg-auto">
              {/* Search Form */}
              <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
                <li><a href="/">Home</a></li>
                <li className="ft-dd"><a href="/">Explore Art</a>
                  <ul className="ft-dd-menu">
                    <li><a href="/art">Art</a></li>
                    <li><a href="/artists">Artists</a></li>
                    <li><a href="/digitize">Digitize your Art</a></li>
                    <li><a href="/exhibition">Exhibitions</a></li>
                  </ul>
                </li>
                <li><a href="/">The Gat3s</a></li>
                <li className="ft-dd"><a href="/about_us">About Us</a>
                  <ul className="ft-dd-menu">
                    <li><a href="/faq">Faq</a></li>
                    <li><a href="/term_Of_Service">Terms of service</a></li>
                    <li><a href="/privacy_policy">Privacy Policy</a></li>
                  </ul>
                </li>
                <li><a href="/join_us">Join us</a></li>
                <li className="ft-dd "><a href='/' className="btn btn-warning btn-sm rounded-pill mx-3" style={{width: 'fit-content', height: 'fit-content'}} >Connect Wallet</a>
                  <ul className="ft-dd-menu">
                    <li><a href="/">MetaMask</a></li>
                    <li><a href="/">Wallet Connect</a></li>
                    <li><a href="/">Coinbase Wallet</a></li>
                  </ul>
                </li>
              </ul>
              {/* User Dropdown */}
              {/*  */}
              <a href="/"><img style={{width: '40px', borderRadius: '100px'}} src="https://www.pngkey.com/png/detail/921-9211985_blockchain-cryptocurrency-wallet-ethereum-dogecoin-free-ethereum-png.png" alt='img' /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
              {/* Breadcrumb */}
              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-content">
                    <h2 className="breadcrumb-title">NFT title will be here</h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Art Details</li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Share Modal */}
              <div className="share-modal modal fade" id="shareModal" tabIndex={-1} aria-labelledby="shareModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body p-4 text-center">
                      <h4 className="mb-4" id="shareModalLabel">Share this item</h4>
                      <div className="d-flex align-items-center justify-content-center"><a className="mx-2" href="art-details.html#"><img src="img/core-img/icons8-facebook.svg" alt="" /></a><a className="mx-2" href="art-details.html#"><img src="img/core-img/icons8-twitter.svg" alt="" /></a><a className="mx-2" href="art-details.html#"><img src="img/core-img/icons8-instagram.svg" alt="" /></a><a className="mx-2" href="art-details.html#"><img src="img/core-img/icons8-slack.svg" alt="" /></a><a className="mx-2" href="art-details.html#"><img src="img/core-img/icons8-player.svg" alt="" /></a></div>
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
                      <h4 className="mb-4" id="copylinkLabel">Copy item link</h4>
                      <p className="user-select-all mb-0 border border-2 p-3 rounded">
                        https://themeforest.net/item/affan-pwa-mobile-html-template/29715548</p>
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
                      <form action="art-details.html#">
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
              {/* Item Details */}
              <div className="item-details-wrap">
                <div className="container">
                  <div className="row g-4 g-lg-5 justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="item-big-thumb"><img src="img/bg-img/4.jpg" alt="" data-action="zoom" /></div>
                    </div>
                    {/* Item Details Content */}
                    <div className="col-12 col-md-9 col-lg-6">
                      <div className="item-details-content mt-5 mt-lg-0">
                        <div className="dropdown item-details-dd">
                          <button className="dropdown-toggle" id="dwd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                          {/* Dropdown Menu */}
                          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dwd987">
                            <li><a className="dropdown-item" href="art-details.html#" data-bs-toggle="modal" data-bs-target="#shareModal"><i className="me-1 bi bi-share" />Share</a></li>
                            <li><a className="dropdown-item" href="art-details.html#" data-bs-toggle="modal" data-bs-target="#copylinkModal"><i className="me-1 bi bi-box-arrow-up-right" />Copy Link</a></li>
                            <li><a className="dropdown-item" href="art-details.html#" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="me-1 bi bi-flag" />Report</a></li>
                          </ul>
                        </div>
                        <div className="d-flex flex-wrap align-items-center">
                          {/* Wishlist */}
                          <button className="btn btn-dark btn-sm rounded-pill px-3 wishlist-btn" type="button"><i className="bi" /><span className="ms-1">98</span></button>
                          {/* Badge*/}
                          <div className="badge border px-3 py-2 rounded-pill text-dark fz-14 d-inline-block ms-1 ms-sm-4"><i className="me-1 bi bi-eye" />8,634 people views this</div>
                        </div>
                        <h2 className="my-3">Diamond Horse Animals #47</h2>
                        <div className="d-flex align-items-center mb-4">
                          <div className="author-img position-relative me-3"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-primary" /></div>
                          <div className="name-author"><span className="d-block fz-14">Created by</span><a className="author d-block fz-16 hover-primary text-truncate" href="art-details.html#">@creative_world</a>
                          </div>
                        </div>
                        <div className="border-top w-75 mb-4" />
                        {/* Bid End */}
                        <p className="lh-1">Bid ending soon</p>
                        <div className="bid-ends mb-4" data-date="December 31, 2022 14:19:39">
                          <div><span className="days" /><span>Days</span></div>
                          <div><span className="hours" /><span>Hours</span></div>
                          <div><span className="minutes" /><span>Min</span></div>
                          <div><span className="seconds" /><span>Sec</span></div>
                        </div>
                        <div className="row align-items-end">
                          <div className="col-6 col-sm-4">
                            <p className="mb-2">Floor price</p>
                            <h5 className="text-center mb-0 border border-2 px-3 py-2 border-primary d-inline-block rounded text-primary w-100">
                              7.803 ETH </h5>
                          </div>
                          <div className="col-6 col-sm-4 col-lg-5"><a className="btn btn-primary rounded-pill w-100" href="art-details.html#"><img className="me-1" src="img/core-img/fire.png" alt="" />Place a bid</a></div>
                        </div>
                        <div className="border-top w-75 my-4" />
                        <div className="short-description">
                          <h5>Short Description</h5>
                          <p className="mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut veniam consectetur
                            magnam libero, natus eius numquam reprehenderit hic at, excepturi repudiandae magni optio odio
                            doloribus?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block w-100 mb-70" />
              <div className="funto-tab-area">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab--area bg-gray p-4 p-lg-5">
                        <ul className="nav nav-tabs" id="funtoTab" role="tablist">
                          <li className="nav-item"><a className="nav-link rounded-pill bg-gradient active" id="tab--1" data-bs-toggle="tab" href="art-details.html#tab1" role="tab" aria-controls="tab1" aria-selected="true">Details</a></li>
                          <li className="nav-item"><a className="nav-link rounded-pill bg-gradient" id="tab--2" data-bs-toggle="tab" href="art-details.html#tab2" role="tab" aria-controls="tab2" aria-selected="false">Activity</a></li>
                        </ul>
                        <div className="tab-content">
                          {/* Tab Pane*/}
                          <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                            <div className="card border-0">
                              <div className="card-body p-4">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi ut, debitis delectus
                                  deserunt ipsa ullam necessitatibus expedita laboriosam mollitia veniam rerum error iste, tempora
                                  vitae. Quasi totam exercitationem odit.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quisquam consectetur aliquid
                                  accusantium aut. A, veritatis voluptates. Blanditiis ut repellat, reprehenderit rem ab cum cumque
                                  veniam nulla officiis, quo maxime facilis aut eius labore quisquam nemo ea illum! Reprehenderit
                                  officia illo ipsa.</p>
                                <ul>
                                  <li>Bootstrap 5</li>
                                  <li>Vanilla JS </li>
                                  <li>Creative Design</li>
                                </ul>
                                <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae saepe eveniet optio
                                  minima, minus quas distinctio iste laudantium in voluptates, corporis labore. Debitis saepe et
                                  laudantium, dolor necessitatibus eius porro reiciendis?</p>
                              </div>
                            </div>
                          </div>
                          {/* Tab Pane*/}
                          <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                            <div className="table-responsive border shadow-sm activity-table bg-white">
                              <table className="table mb-0">
                                <tbody>
                                  <tr>
                                    <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="art-details.html">
                                        <img className="rounded me-1" src="img/bg-img/5.jpg" alt="" />NFT Logo</a></th>
                                    <td> <span className="d-inline-block fw-bold fz-14">0.235 ETH</span></td>
                                    <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u1.jpg" alt="" />@creative_art</a></td>
                                    <td><i className="bi bi-cart" />Sales</td>
                                    <td><i className="bi bi-clock" />29 min ago</td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="art-details.html">
                                        <img className="rounded me-1" src="img/bg-img/6.jpg" alt="" />Pixel Art</a></th>
                                    <td> <span className="d-inline-block fw-bold fz-14">0.706 ETH</span></td>
                                    <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u2.jpg" alt="" />@designing_world</a></td>
                                    <td><i className="bi bi-percent" />Offer</td>
                                    <td><i className="bi bi-clock" />1h ago</td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="art-details.html">
                                        <img className="rounded me-1" src="img/bg-img/7.jpg" alt="" />Funny Pigs</a></th>
                                    <td> <span className="d-inline-block fw-bold fz-14">0.105 ETH</span></td>
                                    <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u3.jpg" alt="" />@art_world</a></td>
                                    <td><i className="bi bi-patch-exclamation" />Alert</td>
                                    <td><i className="bi bi-clock" />2h ago</td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><a className="btn btn-minimal text-dark hover-primary" href="art-details.html">
                                        <img className="rounded me-1" src="img/bg-img/8.jpg" alt="" />Fancy Car 2</a></th>
                                    <td> <span className="d-inline-block fw-bold fz-14">0.95 ETH</span></td>
                                    <td><a className="btn btn-minimal text-dark hover-primary" href="author.html"><img className="rounded-pill me-1" src="img/bg-img/u4.jpg" alt="" />@fancy_car</a></td>
                                    <td><i className="bi bi-cart" />Sales</td>
                                    <td><i className="bi bi-clock" />3h ago</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Related Project  */}
              <div className="related-project-area">
                <div className="container">
                  <div className="section-heading">
                    <h2 className="mb-0">Related Projects</h2>
                  </div>
                  {/* Slide */}
                  <div className="related-project-slide">
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dttd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dttd987">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddwer211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddwer211">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 2.961
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a>
                                </div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddgtf87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddgtf87">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.06
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a>
                                </div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd45ee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd45ee">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.01
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dwwd987" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dwwd987">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="uudsd211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="uudsd211">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 2.961
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a>
                                </div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddddwf87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddddwf87">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.06
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@designing_world</a>
                                </div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {/* Featured Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd63ee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd63ee">
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-share" />Share</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-flag" />Report</a>
                                </li>
                                <li><a className="dropdown-item" href="art-details.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a></li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.01
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="art-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art-details.html#">Place
                                bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* CTA Wrapper */}
              <div className="divider" />
              {/* Dark Light Wrapper */}
              {/* Footer */}
              <footer className="footer-area pb-120 pt-120" style={{backgroundImage: 'url("img/bg-img/1.jpg")'}}>
                <div className="container">
                  <div className="row">
                    {/* Footer Widget */}
                    <div className="col-12 col-lg-5">
                      <div className="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end"><a className="d-block mb-4" href="/"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img'/></a>
                        <p>
                          We seek
                          beauty</p>
                        <p className="mb-0"> Email: <a href="mailto:abc@dummy.com">help@gat3.com</a></p>
                        {/* Social Icon */}
                        <h5 className="mt-4 mb-3">Join the community</h5>
                        <div className="footer-social-icon d-flex align-items-center flex-wrap"><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="discord"><i className="bi bi-discord" style={{fontSize: '20pt'}} /></a><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="Instagram"><i className="bi bi-instagram" style={{fontSize: '20pt'}} /></a><a href="index.html#" data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter"><i className="bi bi-twitter" style={{fontSize: '20pt'}} /></a></div>
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

export default ArtDetails