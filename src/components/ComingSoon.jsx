import React from 'react'

function ComingSoon() {
  return (

            <div>
              {/* Preloader*/}
              {/* <div className="preloader" id="preloader">
                <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>
              </div> */}
              {/* Wrap */}
              <div className="coming-soon-wrapper bg-img bg-overlay" style={{backgroundImage: 'url("img/bg-img/1.jpg")'}}>
                <div className="cs-content w-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-8">
                        <div className="logo mb-5"><img src="img/core-img/logo-white.png" alt="" /></div>
                        {/* Countdown */}
                        <div className="bid-ends" data-date="March 31, 2023 14:19:54">
                          <div><span className="days" /><span>Days</span></div>
                          <div><span className="hours" /><span>Hours</span></div>
                          <div><span className="minutes" /><span>Min</span></div>
                          <div><span className="seconds" /><span>Sec</span></div>
                        </div>
                        <h2 className="display-4 mb-4 fw-bold">Coming Soon</h2>
                        <p className="mb-4">Build an excellent NFTs website with Funto.</p><a className="btn btn-primary btn-sm rounded-pill" href="index.html">View Status</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* All JavaScript Files*/}
            </div>
       
  )
}

export default ComingSoon