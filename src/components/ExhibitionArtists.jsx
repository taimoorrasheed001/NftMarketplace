import React from "react";
import { tns } from "tiny-slider";
import { useEffect } from "react";
// import banner from './'

function ExhibitionArtists() {
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

      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb-content justify-content-center">
            <h2 className="breadcrumb-title">Exhibitions</h2>
          </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                exhibition
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="divider" />
      <div className="collection-wrapper">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-12 col-xl-12">
              <div className="">
                <a href="/artists">
                  <div className="">
                    <img src="img/core-img/img2.jpg" alt="" />
                  </div>
                  {/* <h2 className='mt-2'>Digital Exhibitions</h2> */}
                </a>
              </div>
            </div>

            <div className="col-12 col-md-12 col-xl-12">
              <div className="mt-5">
                <h1>This is Get3 Exhibition</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  dolorem sit facilis est officiis mollitia cumque suscipit
                  exercitationem aspernatur error porro, ducimus praesentium
                  ipsa cupiditate quam eveniet magnam animi tempora. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Obcaecati
                  delectus porro vero minima modi cumque corrupti commodi eius
                  magni iusto sapiente dicta quam, laudantium laborum at nisi.
                  Ea, ipsa provident. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Vel quo dolores et quis magni distinctio
                  molestiae ipsa, magnam quos? Consequuntur, alias libero.
                  Provident eveniet suscipit incidunt quidem! Minima,
                  consectetur modi? Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Fugit nostrum delectus inventore dolores nam
                  officiis vel accusantium dolore? Adipisci omnis modi sed sunt
                  voluptatem, laboriosam fugiat autem esse ullam blanditiis.
                </p>
              </div>
            </div>
          </div>

          
        </div>
        <div className="divider" />

        <div className="seller-wrapper">
                <div className="container">
                    <h2 className="mb-3">Featured Artists</h2>
                  <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u1.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u4.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u2.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u3.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u3.jpg" className="image--cover" alt="" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-3">
                     
                      {/* Single Card */}
                     <a href="/artist_details">
                      <div className="wrapper justify-content-center">
                            <div className="text-center">
                                <img src="img/bg-img/u3.jpg" className="image--cover" alt="img" />
                            <h6 className="justify-content-center">Soc</h6>

                            </div>

                        </div>
                        </a>
                    </div>
                 
                  </div>
                </div>
              </div>

      
      </div>
      <div className="divider" />

      <div className="container">

        <h2 className="mb-5">Featured Artwork</h2>
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

                <div className="divider" />

<div className="contact-wrapper">
  <div className="container">
    <div className="row g-5 align-items-center">
      {/* <div className="breadcrumb-content justify-content-center">
      <h2 className="breadcrumb-title">Join us</h2>
    </div> */}
      {/* Contact Form */}
      <div className="col-12 col-lg-6">
        <div className="contact-form">
          <h1 className="mb-3">Join Now</h1>
          <p className="mb-5">
            Write to us or give us a call. We will reply to you as soon as
            possible. But yes, it can take up to 24 hours.
          </p>
          <form action="contact.html#" method="POST">
            <div className="row g-4">
              <div className="col-12">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  defaultValue={""}
                  name="name"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Username"
                  defaultValue={""}
                  name="name"
                  required
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  defaultValue={""}
                  required
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  id="topics"
                  type="text"
                  placeholder="Wallet Address"
                  name="topics"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
              <div class="input-group custom-file-button">
    <label class="input-group-text bg-transparent text-white w-25" for="inputGroupFile">Choose File</label>
    <input type="file" class="form-control" id="inputGroupFile"/>
  </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary rounded-pill"
                  type="submit"
                >
                  Send now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Google Maps */}
      <div className="col-12 col-lg-6">
        <div className="maps-wrap">
          <iframe
          title="myFrame1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14047.882048906753!2d-0.14268817855593444!3d51.50701170390822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1570696571917!5m2!1sen!2sbd"
            allowFullScreen
          />
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
                </div>

                <div className="col-6 col-sm-4">
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
                </div>

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

export default ExhibitionArtists;
