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
   
              {/* Scroll To Top */}
              <div id="scrollTopButton"><i className="bi bi-arrow-up-short" /></div>
              {/* All JavaScript Files*/}
            </div>
        
  )
}

export default Faq