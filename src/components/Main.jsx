import React from "react";

import { tns } from "tiny-slider";
// import slideToggle from "react-slide-toggle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { bootstrap } from "react-bootstrap";
// import './style.css'

// import { MarketplaceContext } from "../Context/MarketplaceContext";
// import {  Route } from "react-router";


function Main() {
 

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

    var video = document.getElementById("myVideo");

    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
      video.play();
    }
  }, []);


  useEffect(() => {

    var video = document.getElementById("myVideo");

    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
      video.play();
    }
  }, []);


  return (
    <div>
      {/* Preloader*/}
      {/* <div className="preloader" id="preloader">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> */}
      {/* Header Area*/}
      {/* Header Area*/}
  
      {/* Breadcrumb */}
      {/* Welcome Wrapper  */}
      <div className="welcome-area ">
        <div className="container-fluid">
          {/* <div className="row align-items-center"> */}
          {/* Welcome Content */}
          {/* <div className="col-12 col-sm-10 col-md-12"> */}
          <div className="video_wrapper">
            <div className="video_second_wrapper">
              <video
                autoPlay
                loop
                muted="muted"
                playsinline
                height="NaN"
                width="100%"
                id="myVideo"
              >
                <source
                  src="https://assets.blackdove.com/videos/BD_WEB_desk-Digital_Canvas_x_Braden.mp4"
                  type="video/mp4"
                />
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
                <h2 className="mb-0">
                  Artworks{" "}
                  <span>
                    {" "}
                    <Link
                      class="btn ms-2 rounded-pill btn-outline-primary btn-sm border-2"
                      to="/exhibition"
                    >
                      Browse all artwork
                    </Link>
                  </span>
                </h2>
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
                      <img src="img/bg-img/40.jpg" alt="img" />
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
                              <img
                                className="shadow"
                                src="img/bg-img/u1.jpg"
                                alt="img"
                              />
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
              <div class="col-5 text-end">
                <Link
                  class="btn rounded-pill btn-outline-primary btn-sm border-2"
                  to="/artists"
                >
                  Browse all artists
                </Link>
              </div>
            </div>
          </div>
          {/* <h2 className="mb-3"></h2> */}
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div clasget3sName="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u1.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div className="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u4.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div className="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u4.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div className="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u2.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div className="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u1.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-2">
              {/* Single Card */}

              <div className="wrapper justify-content-center">
                <Link to="/artist_details">
                  <div className="text-center">
                    <img
                      src="img/bg-img/u1.jpg"
                      className="image--cover"
                      alt=""
                    />
                    <h6 className="justify-content-center">Soc</h6>
                  </div>
                </Link>
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
                <h2 class="mb-0 ms-3">Digitize</h2>
              </div>
            </div>
            <div class="col-5 text-end">
              <Link
                class="btn rounded-pill btn-outline-primary btn-sm border-2"
                to="/exhibition"
              >
                Browse all the Digitize
              </Link>
            </div>
          </div>
        </div>

        <div className="collection-wrapper">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-12 col-xl-12">
                <div className="">
                  <Link to="/digitize">
                    <div className="">
                      <img src="img/core-img/img2.jpg" alt="" />
                    </div>
                    {/* <h2 className="mt-2"></h2> */}
                  </Link>
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
                  <p className="mb-5  pera-style">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, aliquam similique. Ea cupiditate, iure animi commodi
                    modi{" "}
                  </p>

                  <a href="/">
                    {" "}
                    <button
                      className="btn btn-lg btn-info btn-custom"
                      width="50"
                    >
                      Get3
                    </button>{" "}
                  </a>
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
            <div class="col-5 text-end">
              <Link
                class="btn rounded-pill btn-outline-primary btn-sm border-2"
                to="/exhibition"
              >
                Browse all the Exhibitions
              </Link>
            </div>
          </div>
        </div>

        <div className="collection-wrapper">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6 col-xl-6">
                <div className="">
                  <Link to="/exhibition-artist">
                    <div className="">
                      <img src="img/core-img/img2.jpg" alt="" />
                    </div>
                    <h2 className="mt-2">Digital Exhibitions</h2>
                  </Link>
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-6">
                <div className="">
                  <Link to="/coming_soon">
                    <div className="">
                      <img src="img/core-img/img1.jpg" alt="" />
                    </div>
                    <h2 className="mt-2">IRL Exhibitions</h2>
                  </Link>
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

      <div class="container">
          <div class="row">
            <div class="col-7">
              <div class="section-heading">
                <h2 class="mb-0 ms-3">Join Us</h2>
              </div>
            </div>
            
          </div>
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
                  <p className="mb-5  pera-style">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, aliquam similique. Ea cupiditate, iure animi commodi
                    modi{" "}
                  </p>

                  <Link to="/join_us">
                   
                    <button
                      className="btn btn-lg btn-outline-info btn-custom"
                      width="50"
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />
      {/* Dark Light Wrapper */}
      {/* Footer */}
      
      {/* Scroll To Top */}
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
      {/* All JavaScript Files*/}
    </div>
  );
}

export default Main;
