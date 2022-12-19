import React from 'react'
import { tns } from 'tiny-slider';

import {useEffect, useState} from 'react';

function Art() {

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

  const [currency, setCurrency] = useState("ETH");
  // const getInitialState = () => {
  //   const currency = "ETH";
  //   return currency;
  // };
  const handleChange = (e) => {
    setCurrency(e.target.value);
  };
console.log(currency)



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
                    <h2 className="breadcrumb-title ">Explore Artworks</h2>
             
                  </div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Art</li>
                      </ol>
                    </nav>
              
               
                </div>
              </div>
              
              {/* Explore Items */}

              <div className="container">
              <h4>Welcome to Get3 Art</h4>
 
              </div>
              <div className="divider" />
              <div className="explore-items-wrapper">
                
                <div className="container">

                  <div className="row g-4 align-items-end">
                    <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Status</h5>
                      <select className=" filter-select bg-gray w-100">
                        <option selected value="all">All</option>
                        <option selected value="buy-now">Buy Now</option>
                        <option value="on-auction">On Auction</option>
           
                      </select>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Categories</h5>
                      <select className="filter-select2 bg-gray w-100 ">
                        <option selected value={1}>3D Art</option>
                        <option value={2}>Surreal</option>
                        <option value={3}>Illustration</option>
                        <option value={4}>Painting</option>
                        <option value={5}>Photography</option>
                        <option value={6}>AI</option>
                        <option value={7}>Pixel Art</option>
                        <option value={8}>Psychedelic</option>
                        <option value={9}>Animation</option>
                        <option value={10}>Abstract</option>
                        <option value={11}>Realistic</option>
                        <option value={12}>Multidisciplinary</option>
                        {/* <option value={13}>Abstract</option> */}
                      </select>
                    </div>
                    {/* <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Items</h5>
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>All</option>
                        <option value={2}>Single</option>
                        <option value={3}>Bundle</option>
                      </select>
                    </div> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Sort By</h5>
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>Recently Added</option>
                        <option value={2}>Recently Sold</option>
                        <option value={3}>Ending Soon</option>
                      </select>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Select Currency</h5>
                      <select className="filter-select bg-gray w-100" value={currency} onChange={handleChange}>
                        <option selected value={"ETH"} >ETH</option>
                        <option value={"EUR"} >EUR</option>
                        {/* <option value={3}>Ending Soon</option> */}
                      </select>
                    </div>
                    
                    
                    <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Price</h5>
                      <label for="exampleInputEmail1" className="form-label ">Min</label>

                      <input className='input_class'  id="title" type="number" maxlength="4" size="1" placeholder={currency} />

                      <label for="exampleInputEmail1" className="form-label ">Max</label>

                      <input className='input_class ms-4'  id="title" type="number"  placeholder={currency} />
                      {/* <input className="form-control bg-gray" id="title" type="max" placeholder="min" /> */}
                      {/* <input id="filterRange" className='bg-gray' type="min" name="filterByValue" defaultValue data-min={100} data-max={1000} data-from={300} data-to={750} data-type="double" data-prefix data-grid="false" /> */}
                    </div>
                    {/* <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Ratings</h5>
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>5 Star</option>
                        <option value={2}>4 Star &amp; Above</option>
                        <option value={3}>3 Star &amp; Above</option>
                        <option value={4}>2 Star &amp; Above</option>
                        <option value={5}>1 Star &amp; Above</option>
                      </select>
                    </div> */}
                    {/* <div className="col-12 col-sm-6 col-lg-3">
                      <h5>Chains</h5>
                      <select className="filter-select bg-gray w-100">
                        <option selected value={1}>Bitcoin</option>
                        <option value={2}>Ethereum</option>
                        <option value={3}>Tether</option>
                      </select>
                    </div> */}
                    <div className="col-12 col-sm-6 col-lg-3">
                      <button className="btn btn-primary rounded-pill w-100" type="submit">Apply<i className="ms-1 bi bi-arrow-right" /></button>
                    </div>
                  </div>
                </div>
                <div className="w-100 mb-70 d-block" />
                <div className="container">
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd98hg7" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd98hg7">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dds211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dds211">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 2.961
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@creative_art</a>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddfnj87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddfnj87">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.06
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@designing_world</a>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddffee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddffee">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.01
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/17.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />Hot bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="cads78s78" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cads78s78">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.324
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@creative_art</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/18.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd78e99" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd78e99">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 9.32
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sculpture Human Face">Sculpture Human Face</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@designing_world</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">9.32 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/13.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-primary position-absolute"><img src="img/core-img/fire.png" alt="" />Featured</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd98jl7" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd98jl7">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Monkey Arts #114">Monkey Arts #114</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/14.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddbbww211" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddbbww211">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 2.961
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u2.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Two Monkey's Fun">Two Monkey's Fun</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@creative_art</a>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/15.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddfws87" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddfws87">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.06
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u3.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Kings with Bitcoin">Kings with Bitcoin</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@designing_world</a>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/16.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />New Bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="ddesee" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="ddesee">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.01
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u4.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Pixel Plane">Pixel Plane</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@nft_fun</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/17.jpg" alt="" />
                            {/* Badge */}
                            <div className="badge bg-dark position-absolute"><img src="img/core-img/fire.png" alt="" />Hot bid</div>
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="cadss4578" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="cadss4578">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 0.324
                                ETH</span></div>
                            <div className="col-4 text-end">
                              <button className="wishlist-btn active" type="button"><i className="bi" /></button>
                            </div>
                          </div>
                          {/* Meta Info */}
                          <div className="row gx-2 align-items-center mt-2">
                            <div className="col-8">
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative"><img className="shadow" src="img/bg-img/u1.jpg" alt="" /><i className="bi bi-check position-absolute bg-success" /></div>
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Macaw Bird">Macaw Bird</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@creative_art</a></div>
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
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                      <div className="nft-card card shadow-sm">
                        <div className="card-body">
                          <div className="img-wrap"><img src="img/bg-img/18.jpg" alt="" />
                            {/* Dropdown */}
                            <div className="dropdown">
                              <button className="btn dropdown-toggle rounded-pill shadow-sm" id="dd78as99" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots-vertical" /></button>
                              {/* Dropdown Menu */}
                              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dd78as99">
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-share" />Share</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-flag" />Report</a></li>
                                <li><a className="dropdown-item" href="art.html#"><i className="me-1 bi bi-bookmark" />Bookmark</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Others Info */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-8"><span className="d-block fz-12"><i className="bi bi-arrow-up" />Hightest bid 9.32
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
                                <div className="name-author"><a className="name d-block hover-primary fw-bold text-truncate" href="item-details.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Sculpture Human Face">Sculpture Human Face</a><a className="author d-block fz-12 hover-primary text-truncate" href="artist-details.html">@designing_world</a>
                                </div>
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="price text-end"><span className="fz-12 d-block">Current Bid</span>
                                <h6 className="mb-0">9.32 ETH</h6>
                              </div>
                            </div>
                          </div>
                          {/* Button */}
                          <div className="row gx-2 align-items-center mt-3">
                            <div className="col-6"><a className="btn btn-primary btn-sm rounded-pill" href="art.html#">Place bid</a>
                            </div>
                            <div className="col-6 text-end"><a className="btn btn-minimal btn-sm hover-primary" href="activity.html"> <i className="bi bi-activity me-1" />Activity</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination  */}
              <div className="funto-pagination mt-70">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center mb-0">
                    <li className="page-item active"><a className="page-link" href="art.html#">1</a></li>
                    <li className="page-item"><a className="page-link" href="art.html#">2</a></li>
                    <li className="page-item"><a className="page-link" href="art.html#">3</a></li>
                    <li className="page-item"><a className="page-link" href="art.html#">4</a></li>
                    <li className="page-item"><a className="page-link" href="art.html#">...</a></li>
                    <li className="page-item"><a className="page-link" href="art.html#">9</a></li>
                  </ul>
                </nav>
              </div>
              <div className="divider" />
              {/* Dark Light Wrapper */}
              {/* Footer */}
       
              {/* Scroll To Top */}
              <div id="scrollTopButton"><i className="bi bi-arrow-up-short" /></div>
              {/* All JavaScript Files*/}
            </div>
        
  )
}

export default Art