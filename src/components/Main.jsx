import React from "react";
import { tns } from "tiny-slider";
// import slideToggle from "react-slide-toggle";
import {  useEffect, useContext } from "react";
// import { bootstrap } from "react-bootstrap";
// import './style.css'

import { MarketplaceContext } from "../Context/MarketplaceContext";

function Main() {
  const {
    
    connectWallet,
    walletAddress,
 
    getCoinbaseWalletProvider,
    walletConnect,
    onDisconnect,
  } = useContext(MarketplaceContext);
  console.log(walletAddress);
  // useEffect(() => {
  //   getCurrentWalletConnected();
  // }, [walletAddress]);

  useEffect(() => {
    if (document.querySelectorAll(".featured-nfts-slide").length > 0) {
      tns({
        container: ".featured-nfts-slide",
        items: 4,
        gutter: 24,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 900,
        loop: true,
        mouseDrag: true,
        nav: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [

          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>',

          
        ],
        responsive: {
          320: {
            items: 1,
          },
          480: {
            items: 1.3,
          },
          576: {
            items: 1.5,
          },
          768: {
            items: 2.4,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3.5,
          },
          1400: {
            items: 4,
          },
        },
      });
    }

    // sticky header

    let navarToggler = document.querySelector(".navbar-toggler");
    let header = document.querySelector(".header-area");

    if (navarToggler) {
      navarToggler.addEventListener("click", function () {
        header.classList.toggle("mobile-menu-open");
        header.classList.add("sticky-on");
      });
    }

    if (header) {
      function stickyNavigation() {
        if (window.pageYOffset > 10) {
          header.classList.add("sticky-on");
        } else {
          header.classList.remove("sticky-on");
        }
      }

      window.addEventListener("load", stickyNavigation);
      window.addEventListener("scroll", stickyNavigation);
    }

    // :: Anchor Prevent Default

    let anchor = document.querySelectorAll('a[href="#"]');
    let anchorLength = anchor.length;

    if (anchorLength > 0) {
      for (let i = 0; i < anchorLength; i++) {
        anchor[i].addEventListener("click", function (e) {
          e.preventDefault();
        });
      }
    }

    // :: Preloader

    let preloader = document.getElementById("preloader");

    if (preloader) {
      window.addEventListener("load", function () {
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


    var video=document.getElementById("myVideo");

    if(video.muted){
      video.muted = false;
    } else {
  
      video.muted = true;
      video.play()
    }
  

    
  }, []);

  return (
    <div>
      {/* Preloader*/}
      <div className="preloader" id="preloader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      {/* Header Area*/}
      {/* Header Area*/}
      <header className="header-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Navbar Brand */}
            <a className="navbar-brand" href="/">
              <img className="light-logo" src="img/core-img/logo.png" alt="img"/>
              <img className="dark-logo" src="img/core-img/logo-white.png" alt="img"/>
            </a>
            {/* Navbar Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#funtoNav"
              aria-controls="funtoNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-grid" />
            </button>
            {/* Navbar */}
            <div className="collapse navbar-collapse" id="funtoNav">
              <div className="search-form position-relative d-flex align-items-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
                <button className="position-absolute" type="submit" />
              </div>
              {/* Header Meta */}
              <div className="header-meta d-flex align-items-center ms-lg-auto">
                {/* Search Form */}
                <ul className="navbar-nav navbar-nav-scroll my-2 my-lg-0">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="ft-dd">
                    <a href="/">Explore Art</a>
                    <ul className="ft-dd-menu">
                      <li>
                        <a href="/art">Art</a>
                      </li>
                      <li>
                        <a href="/artists">Artists</a>
                      </li>
                      <li>
                        <a href="/digitize">Digitize your Art</a>
                      </li>
                      <li>
                        <a href="/exhibition">Exhibitions</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">The Gat3s</a>
                  </li>
                  <li className="ft-dd">
                    <a href="/about_us">About Us</a>
                    <ul className="ft-dd-menu">
                      <li>
                        <a href="/faq">Faq</a>
                      </li>
                      <li>
                        <a href="/term_Of_Service">Terms of service</a>
                      </li>
                      <li>
                        <a href="/privacy_policy">Privacy Policy</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/join_us">Join us</a>
                  </li>
                  <li className="ft-dd ">
                    <a
                    href="/"
                      className="btn btn-warning btn-sm rounded-pill mx-3"
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      {walletAddress !== " " ? (
                        <a
                           href="/"
                          onClick={() => {
                            onDisconnect();
                          }}
                        >
                          Connect Wallet
                        </a>
                      ) : (
                        "Connect Wallet"
                      )}
                    </a>
                    <ul className="ft-dd-menu">
                      <li>
                        <a
                          href="/"
                          
                          onClick={() => {
                            connectWallet();
                          }}
                        >
                          MetaMask
                        </a>
                      </li>
                      <li>
                        <a
                        href="/"
                          onClick={() => {
                            walletConnect();
                          }}
                        >
                          Wallet Connect
                        </a>
                      </li>
                      <li>
                        <a
                        href="/"
                          onClick={() => {
                            getCoinbaseWalletProvider();
                          }}
                        >
                          Coinbase Wallet
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* User Dropdown */}
                {/*  */}
                <a href="/">
                  <img
                    style={{ width: "40px", borderRadius: "100px" }}
                    src="https://www.pngkey.com/png/detail/921-9211985_blockchain-cryptocurrency-wallet-ethereum-dogecoin-free-ethereum-png.png"
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Breadcrumb */}
      {/* Welcome Wrapper  */}
      <div className="welcome-area ">
        <div className="container-fluid">
          {/* <div className="row align-items-center"> */}
            {/* Welcome Content */}
            {/* <div className="col-12 col-sm-10 col-md-12"> */}
              <div className="video_wrapper">
                <div className="video_second_wrapper">
            <video autoPlay  loop muted="muted" height="NaN" width="100%" id="myVideo">
             <source src="video/hero.mp4" type="video/mp4"/>

              </video>
                    </div>
         
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="divider" />
      <div className="featured-nfts-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-9 col-lg-6">
              <div className="section-heading">
             
                <h2 className="mb-0">Artworks <span> <a class="btn ms-2 rounded-pill btn-outline-primary btn-sm border-2"
            href="exhibition.html">Browse all artwork</a></span></h2>
         
              </div>
              
            </div>
          </div>
        </div>
    

        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Featured NFT's Slide*/}
              <div className="featured-nfts-slide">
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img"/>
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Featured Card */}
                  <div className="nft-card card featured-card border-0 bg-gray">
                    <div className="img-wrap">
                      <img src="img/bg-img/40.jpg" alt="img"/>
                      {/* Badge */}
                      <div className="badge bg-primary position-absolute">
                        <img src="img/core-img/fire.png" alt="img" />
                        Featured
                      </div>
                      {/* Dropdown */}
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle rounded-pill shadow-sm"
                          id="dropdown17e"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical" />
                        </button>
                        {/* Dropdown Menu */}
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdown17e"
                        >
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-share" />
                              Share
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-flag" />
                              Report
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index.html#">
                              <i className="me-1 bi bi-bookmark" />
                              Bookmark
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      {/* Others Info */}
                      <div className="row gx-2 align-items-center">
                        <div className="col-8">
                          <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button className="wishlist-btn active" type="button">
                            <i className="bi" />
                          </button>
                        </div>
                      </div>
                      {/* Meta Info */}
                      <div className="row gx-2 align-items-center mt-2">
                        <div className="col-8">
                          <div className="name-info d-flex align-items-center">
                            <div className="author-img position-relative">
                              <img className="shadow" src="img/bg-img/u1.jpg" alt="img"/>
                              <i className="bi bi-check position-absolute bg-success" />
                            </div>
                            <div className="name-author">
                              <a
                                className="name d-block hover-primary fw-bold text-truncate"
                                href="art-details.html"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Cowboy Riding Bull Nature"
                              >
                                Cowboy Riding Bull Nature
                              </a>
                              <a
                                className="author d-block fz-12 hover-primary text-truncate"
                                href="artist-details.html"
                              >
                                @the_socsols
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="price text-end">
                            <span className="fz-12 d-block">Current Bid</span>
                            <h6 className="mb-0">0.061 ETH</h6>
                          </div>
                        </div>
                      </div>
                      {/* Button */}
                      <div className="row gx-2 align-items-center mt-3">
                        <div className="col-6">
                          <a
                            className="btn btn-primary rounded-pill btn-sm"
                            href="art-details.html"
                          >
                            Place Bid
                          </a>
                        </div>
                        <div className="col-6 text-end">
                          <a
                            className="btn btn-minimal btn-sm hover-primary"
                            href="activity.html"
                          >
                            {" "}
                            <i className="bi bi-activity me-1" />
                            Activity
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="progress mt-5">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>    */}
        </div>
        
      </div>
      <div className="divider" />
      <div className="divider" />

      {/* Top Seller Wrapper */}

 <div className="seller-wrapper">
                <div className="container">
                <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="section-heading">
            <h2 class="mb-0 ms-3">Artists</h2>
          </div>
        </div>
        <div class="col-5 text-end"><a class="btn rounded-pill btn-outline-primary btn-sm border-2"
            href="/artists">Browse all artists</a></div>
      </div>
    </div>
                    {/* <h2 className="mb-3"></h2> */}
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div clasget3sName="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div className="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div className="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div className="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div className="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
                     
                      {/* Single Card */}

                      <div className="wrapper justify-content-center">
                     <a href="/artist_details">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>
                        </a>
                        </div>
                        
                    </div>
                  
             
                  
                    
                 
                  </div>
                </div>
              </div>  
              <div className="divider" />
      <div className="divider" />

        <div className="container_wrapper">
        <div className=" container container_wrapper">

          <div className="row">
        {/* <h2 className="mt-2">The Gates</h2> */}

            <div className=" col-lg-6 col-xl-6 col-md-6">
               <img src="img/get3.jpg" className="img-style" alt="" />                 
            </div>

            <div className="col-lg-6 col-xl-6 col-md-6 justify-content-center">
              <div className="container text-wrapper ">
                <div className=" text-start mt-5 ">
                  <h2 className="mb-5">The Get3 World</h2>
                  <p className="mb-5  pera-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aliquam similique. Ea cupiditate, iure animi commodi modi </p>            

                   <a href="/"> <button className="btn btn-lg btn-info btn-custom" width="50">Get3</button>   </a>     
                  </div>
                  </div>

            </div>
          </div>
          </div>  
          </div>                  
   
      <div className="divider" />
    


      <div className="divider" />
      <div className="collection-wrapper">
      <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="section-heading">
            <h2 class="mb-0 ms-3">Exhibitions</h2>
          </div>
        </div>
        <div class="col-5 text-end"><a class="btn rounded-pill btn-outline-primary btn-sm border-2"
            href="/exhibition">Browse all the Exhibitions</a></div>
      </div>
    </div>
      
        <div className="collection-wrapper">
             
             <div className="container">
          
               <div className="row g-4">
                 <div className="col-12 col-md-6 col-xl-6">
                  <div className="">
                   <a href="/exhibition-artist">
                     <div className="">
                       <img src="img/core-img/img2.jpg" alt="" />
                     </div>
                    <h2 className='mt-2'>Digital Exhibitions</h2>
                   </a>
                  </div>
                 </div>

                 <div className="col-12 col-md-6 col-xl-6">
                 <div className="">
                   <a href="/coming_soon">
                     <div className="">
                       <img src="img/core-img/img1.jpg" alt="" />
                     </div>
                     <h2 className='mt-2'>IRL Exhibitions</h2>
                   </a>
                  </div>
                 </div>

            

{/*                     
                 <div className="col-12 col-md-12 col-xl-12">
                 <div className="mt-5">
                   <h3>Get3</h3>

                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorem sit facilis est officiis mollitia cumque suscipit exercitationem aspernatur error porro, ducimus praesentium ipsa cupiditate quam eveniet magnam animi tempora. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati delectus porro vero minima modi cumque corrupti commodi eius magni iusto sapiente dicta quam, laudantium laborum at nisi. Ea, ipsa provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quo dolores et quis magni distinctio molestiae ipsa, magnam quos? Consequuntur, alias libero. Provident eveniet suscipit incidunt quidem! Minima, consectetur modi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nostrum delectus inventore dolores nam officiis vel accusantium dolore? Adipisci omnis modi sed sunt voluptatem, laboriosam fugiat autem esse ullam blanditiis.</p>
                  </div>
                 </div> */}
                
               
               </div>
             </div>
             {/* <div className="container">
               <div className="text-center mt-70"><a className="btn btn-primary btn-sm rounded-pill" href="exhibition.html#">Load more<i className="ms-1 bi bi-arrow-repeat" /></a></div>
             </div> */}
           </div>
      </div>

      {/* Join Us banner */}

      <div className="divider" />
      <div className="divider" />

      <div className="section-heading position-relative z-index-1000 d-flex align-items-center justify-content-center">
        <h2 className="">Join Us</h2>
      </div>
      <div className="container_wrapper">
        <div className=" container container_wrapper">

          <div className="row">
        {/* <h2 className="mt-2">The Gates</h2> */}

            <div className=" col-lg-6 col-xl-6 col-md-6">
               <img src="img/bg-img/29.jpg" className="img-style" alt="" />                 
            </div>

            <div className="col-lg-6 col-xl-6 col-md-6 justify-content-center">
              <div className="container text-wrapper ">
                <div className=" text-start mt-5 ">
                  <h2 className="mb-5">Become An Artist</h2>
                  <p className="mb-5  pera-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aliquam similique. Ea cupiditate, iure animi commodi modi </p>            

                   <a href="/join_us"> <button className="btn btn-lg btn-outline-info btn-custom" width="50">Apply Now</button>   </a>     
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
                  <img className="light-logo" src="img/core-img/logo.png" alt="img"/>
                  <img
                    className="dark-logo"
                    src="img/core-img/logo-white.png"
                    alt="img"
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
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
      {/* All JavaScript Files*/}
    </div>
  );
}

export default Main;
