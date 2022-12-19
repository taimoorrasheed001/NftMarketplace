import React from "react";
import { tns } from "tiny-slider";
// import slideToggle from "react-slide-toggle";
import { useEffect } from "react";
import Drift from "drift-zoom";
// import Select from 'react-select'
// import NiceSelect from "nice-select";

function Digitize() {
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

    // :: Scroll to Top

    let scrollButton = document.getElementById("scrollTopButton");
    let topdistance = 600;

    if (scrollButton) {
      window.addEventListener("scroll", function () {
        if (
          document.body.scrollTop > topdistance ||
          document.documentElement.scrollTop > topdistance
        ) {
          scrollButton.classList.add("scrolltop-show");
          scrollButton.classList.remove("scrolltop-hide");
        } else {
          scrollButton.classList.add("scrolltop-hide");
          scrollButton.classList.remove("scrolltop-show");
        }
      });

      scrollButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
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

    var demoTrigger = document.querySelector(".test");
    var paneContainer = document.querySelector(".detail");

    new Drift(demoTrigger, {
      paneContainer: paneContainer,
      inlinePane: false,
    });
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


      {/* Breadcrumb */}

      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content justify-content-center">
            <h2 className="breadcrumb-title">Digitize</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Digitize
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="divider" />
      <div className="">
        <div className=" container ">

          <div className="row">
        {/* <h2 className="mt-2">The Gates</h2> */}

            <div className=" col-lg-6 col-xl-6 col-md-6">
            <div className="container text-wrapper ">
                <div className=" text-center mt-5 ">
                  <h2 className="mb-5">Meta</h2>
                  <p className="mb-5  pera-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, aliquam similique. Ea cupiditate, iure animi commodi modi </p>            

                   {/* <a href="/join_us"> <button className="btn btn-lg btn-outline-info btn-custom" width="50">Apply Now</button>   </a>      */}
                  </div>
                  </div>              
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 justify-content-center">
            <img src="img/bg-img/31.jpg" className="img-style" alt="" /> 
          

            </div>
          </div>
          </div>  
          </div>   
      <div className="divider" />

      <div className="container">
        {/* <h1 className='mb-4 just'>Digital Arts are ternds now. Welcome to the World of Nfts</h1> */}

        <div className="row">
          <div className="col-12">
            <div className="row g-4 The Gat3-collection-filter-list">
              {/* Single Card */}
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item collectibles">
                <div className="nft-card card shadow-sm">
                  <div className="card-body">
                    <div className="img-wrap">
                      <img
                        className="test"
                        src="img/bg-img/19.jpg"
                        data-zoom="img/bg-img/19.jpg"
                        alt="img"
                      />
                      {/* Dropdown */}
                    </div>

                    {/* Others Info */}
                    <div className="row gx-2 align-items-center mt-3">
                      <div className="col-12 text-center">
                        <div class="detail">
                          {/* <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span> */}

                          <p>
                            Digital arts are ternds now. Welcome to the world of
                            Nfts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Card */}
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item collectibles">
                <div className="nft-card card shadow-sm">
                  <div className="card-body">
                    <div className="img-wrap">
                      <img src="img/bg-img/19.jpg" alt="img"/>
                      {/* Dropdown */}
                    </div>
                    {/* Others Info */}
                    <div className="row gx-2 align-items-center mt-3">
                      <div className="col-12 text-center">
                        {/* <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span> */}
                        <p>
                          Digital arts are ternds now. Welcome to the world of
                          Nfts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Card */}
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item collectibles">
                <div className="nft-card card shadow-sm">
                  <div className="card-body">
                    <div className="img-wrap">
                      <img src="img/bg-img/19.jpg" alt="img"/>
                      {/* Dropdown */}
                    </div>
                    {/* Others Info */}
                    <div className="row gx-2 align-items-center mt-3">
                      <div className="col-12 text-center">
                        {/* <span className="d-block fz-12">
                            <i className="bi bi-arrow-up" />
                            Hightest bid 0.061 ETH
                          </span> */}
                        <p>
                          Digital arts are ternds now. Welcome to the world of
                          Nfts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        
           
              
              {/* Single Card */}
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 list-item collectibles">
                <div className="nft-card card shadow-sm">
                  <div className="card-body">
                    <div className="img-wrap">
                      <img src="img/bg-img/19.jpg" alt="img"/>
                      {/* Dropdown */}
                    </div>
                    {/* Others Info */} 
                    <div className="row gx-2 align-items-center mt-3">
                      <div className="col-12 text-center">
                        <p>
                          Digital arts are ternds now. Welcome to the world of
                          Nfts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider" />

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
    
      {/* Scroll To Top */}
      <div id="scrollTopButton">
        <i className="bi bi-arrow-up-short" />
      </div>
      {/* All JavaScript Files*/}
    </div>
  );
}

export default Digitize;
