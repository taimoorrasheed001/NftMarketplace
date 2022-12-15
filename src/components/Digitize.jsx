import React from 'react'
import { tns } from 'tiny-slider';
// import slideToggle from "react-slide-toggle";
import {useEffect} from 'react';
// import Select from 'react-select'
// import NiceSelect from "nice-select";

function Digitize() {

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

// :: Scroll to Top

let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > topdistance || document.documentElement.scrollTop > topdistance) {
            scrollButton.classList.add('scrolltop-show');
            scrollButton.classList.remove('scrolltop-hide');
        } else {
            scrollButton.classList.add('scrolltop-hide');
            scrollButton.classList.remove('scrolltop-show');
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
}

// :: Nice Select 

// let popularSelect = document.getElementById("popularSelect");

// if (popularSelect) {
//     Select.bind(popularSelect, {
//         searchable: false
//     });
// }

// let filterSelect = document.querySelectorAll(".filter-select");
// let filterSelectLen = filterSelect.length;

// if (filterSelectLen > 0) {
//     for (let i = 0; i < filterSelectLen; i++) {
//         Select.bind(filterSelect[i], {
//             searchable: false
//         });
//     }
// }

// let filterSelectSearch = document.querySelectorAll(".filter-select2");
// let filterSelectSearchLen = filterSelectSearch.length;

// if (filterSelectSearchLen > 0) {
//     for (let i = 0; i < filterSelectSearchLen; i++) {
//         Select.bind(filterSelectSearch[i], {
//             searchable: true
//         });
//     }
// }


// :: Preloader

let preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', function () {
        let fadeOut = setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(fadeOut);
                preloader.remove();
            }
        }, 20);
    });
}




  }, []);

  
  return (
  
            <div>
              {/* Preloader*/}
              <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div>
              {/* Header Area*/}
              <header className="header-area">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Navbar Brand */}<a className="navbar-brand" href="/"><img className="light-logo" src="img/core-img/logo.png" /><img className="dark-logo" src="img/core-img/logo-white.png" /></a>
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
                <li className="ft-dd"><a href="#">Explore Art</a>
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
                <li className="ft-dd "><a className="btn btn-warning btn-sm rounded-pill mx-3" style={{width: 'fit-content', height: 'fit-content'}} >Connect Wallet</a>
                  <ul className="ft-dd-menu">
                    <li><a href="#">MetaMask</a></li>
                    <li><a href="#">Wallet Connect</a></li>
                    <li><a href="#">Coinbase Wallet</a></li>
                  </ul>
                </li>
              </ul>
              {/* User Dropdown */}
              {/*  */}
              <a href="#"><img style={{width: '40px', borderRadius: '100px'}} src="https://www.pngkey.com/png/detail/921-9211985_blockchain-cryptocurrency-wallet-ethereum-dogecoin-free-ethereum-png.png" /></a>
            </div>
          </div>
        </div>
      </nav>
    </header>

              {/* Breadcrumb */}


              <div className="breadcrumb-wrapper">
                <div className="container">
                  <div className="breadcrumb-content justify-content-center">
                    <h2 className="breadcrumb-title">Digitize your Art</h2>
                
                  </div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">digitize</li>
                      </ol>
                    </nav>
                </div>
              </div>
              <div className="divider" />
              <div className="create-new-wrapper">
                <div className="container">
                  <div className="row g-5 justify-content-center">
                    <div className="col-12 col-lg-8">
                      {/* Create New Form */}
                      <div className="create-new-form border shadow-sm p-4 p-sm-5">
                        <h2 className="mb-4">Create new NFT</h2>
                        <form action="digitize.html">
                          <div className="row align-items-center">
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="formFileMultiple">Upload Files</label>
                                <input className="form-control bg-transparent" id="formFileMultiple" type="file" multiple />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio1" type="radio" name="inlineRadioOptions" defaultValue="option1" defaultChecked />
                                  <label className="form-check-label" htmlFor="inlineRadio1">Fixed price</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio2" type="radio" name="inlineRadioOptions" defaultValue="option2" />
                                  <label className="form-check-label" htmlFor="inlineRadio2">Unlock Purchased</label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" id="inlineRadio3" type="radio" name="inlineRadioOptions" defaultValue="option3" />
                                  <label className="form-check-label" htmlFor="inlineRadio3">Open for bids</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="title">Title</label>
                                <input className="form-control" id="title" type="text" placeholder="Macaw Bird" />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="description">Description</label>
                                <input className="form-control" id="description" type="text" placeholder="Write short description" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="price">Price</label>
                                <input className="form-control" id="price" type="text" placeholder="0.324 ETH" />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="catagories">Catagory</label>
                                <select className="filter-select2 border border-2 w-100 " id="catagories">
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
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="startingDate">Starting Date</label>
                                <input className="form-control" id="startingDate" type="date" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="endingDate">Ending Date</label>
                                <input className="form-control" id="endingDate" type="date" />
                              </div>
                            </div>
                            <div className="col-12 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="royality">Royality</label>
                                <input className="form-control" id="royality" type="text" placeholder="5%" />
                              </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="noOfcopies">No of copies</label>
                                <input className="form-control" id="noOfcopies" type="text" placeholder={13} />
                              </div>
                            </div> */}
                            {/* <div className="col-12 col-sm-6 col-lg-4">
                              <div className="form-group mb-4">
                                <label className="mb-2 fz-16" htmlFor="size">Size</label>
                                <input className="form-control" id="size" type="text" placeholder="20MB" />
                              </div>
                            </div> */}
                            <div className="col-12 col-md-8">
                              <div className="form-check mb-4 mb-md-0">
                                <input className="form-check-input" id="rememberMe" type="checkbox" defaultValue defaultChecked />
                                <label className="form-check-label" htmlFor="rememberMe">I agree to all terms &amp; conditions.</label>
                              </div>
                            </div>
                            <div className="col-12 col-md-4">
                              <button className="btn btn-primary rounded-pill w-100" type="submit">Create</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-4">
                      {/* Preview Card */}
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/17.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />Hot bid</div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.324 ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</a><a className="author d-block fz-12 hover-primary text-truncate" href="author.html">@creative_art</a></div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">0.324 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="digitize.html">Place bid</a></div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                      <h5 className="mb-0 mt-3 text-center"><i className="bi bi-eye me-1" />Live Preview</h5>
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
            <div  className="row g-4">
              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 class="mb-4">Marketplace</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="/art">Art</a></li>
                    <li><a href="/artist">Artists</a></li>
                    <li><a href="/exhibitions">Exhibitions</a></li>
                    <li><a href="/digitize">Digitize</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 class="mb-4">Admin</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="about-us.html">Dashboard</a></li>
                    <li><a href="faq.html">My Wallet</a></li>
                    <li><a href="privacy-policy.html">My Collection </a></li>
                    <li><a href="terms-of-service.html">Setting</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-6 col-sm-4">
                <div className="footer-widget-area mb-70">
                  <h5 class="mb-4">The Get3s</h5>
                  <ul className="list-unstyled mb-0">
                    <li><a href="about-us.html">About us</a></li>
                    <li><a href="faq.html">Join Us</a></li>
                    <li><a href="privacy-policy.html">Newsletter</a></li>
                    <li><a href="terms-of-service.html">FAQ</a></li>
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

export default Digitize