import React from 'react'
import { tns } from 'tiny-slider';
import {useEffect} from 'react';

function Faq() {
  
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
          {/* Navbar Brand */}<a className="navbar-brand" href="/"><img className="light-logo" src="img/core-img/logo.png" alt='img'/><img className="dark-logo" src="img/core-img/logo-white.png" alt='img' /></a>
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
                  <div className="breadcrumb-content justify-content-center">
                    <h2 className="breadcrumb-title">All Questions</h2>
                  
                  </div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Help Center</li>
                      </ol>
                    </nav>
                </div>
              </div>
              <div className="divider" />
              <div className="help-center-wrapper">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-sm-9 col-lg-6">
                      <div className="help-form text-center">
                        <h2 className="display-6 fw-bold mb-4">How can I help you?</h2>
                        {/* Form */}
                        <form action="help-questions.html#">
                          <input className="form-control" type="search" placeholder="Write your question" />
                          <button type="submit"><i className="bi bi-search" /></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="container">
                  <div className="row g-5">
                    <div className="col-12 col-lg-8">
                      <h4 className="mb-4">All Questions</h4>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an account?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            sell an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">Where can I
                            find NFT sales?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How can I
                            stay safe and protect my NFTs?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an account?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            sell an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">Where can I
                            find NFT sales?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How can I
                            stay safe and protect my NFTs?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an account?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            sell an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How do I
                            create an NFT?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">Where can I
                            find NFT sales?</a></div>
                      </div>
                      <div className="card shadow-sm mt-3">
                        <div className="card-body px-4"><a className="d-block fz-18 hover-primary" href="question-details.html">How can I
                            stay safe and protect my NFTs?</a></div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card bg-gray border-0 mt-2">
                        <div className="card-body p-4">
                          <h4 className="mb-3">Popular Questions</h4>
                          <div className="border-top mb-3" /><a className="d-block fz-16 hover-primary mt-3" href="question-details.html">How do I create an account?</a><a className="d-block fz-16 hover-primary mt-3" href="question-details.html">How do I sell an NFT?</a><a className="d-block fz-16 hover-primary mt-3" href="question-details.html">How do I create an NFT?</a><a className="d-block fz-16 hover-primary mt-3" href="question-details.html">Where can I find NFT sales?</a><a className="d-block fz-16 hover-primary mt-3" href="question-details.html">How can I stay safe and protect my NFTs?</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider" />
              {/* Dark Light Wrapper */}
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
                  <img className="light-logo" src="img/core-img/logo.png" alt='img'/>
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
                  {/* <a
                    href="index.html#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Medium"
                  >
                    <i className="bi bi-medium" style={{ fontSize: "20pt" }} />
                  </a> */}
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
{/* 
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
                </div> */}

                {/* <div className="col-6 col-sm-4">
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
                </div> */}

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

export default Faq