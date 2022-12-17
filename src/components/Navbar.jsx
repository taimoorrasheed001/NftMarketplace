import React from 'react'
import { MarketplaceContext } from "../Context/MarketplaceContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const {
        connectWallet,
        // active,
        walletAddress,
        CoinbaseWallet,
        activate,
        // disconnect,
        // connect,
        // account,
        // getCoinbaseWalletProvider,
        walletConnect,
        onDisconnect,
      } = useContext(MarketplaceContext);

  return (
    <div>
          <header className="header-area">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Navbar Brand */}
            <a className="navbar-brand" href="/">
              <img
                className="light-logo"
                src="img/core-img/logo.png"
                alt="img"
              />
              <img
                className="dark-logo"
                src="img/core-img/logo-white.png"
                alt="img"
              />
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
               
                    <Link to="/">Home</Link>
                  </li>
                  <li className="ft-dd">
                    
                    <Link to="/">Explore Art</Link>
                    <ul className="ft-dd-menu">
                      <li> 
                        <Link to="/art">Art</Link>
                        {/* <a href="/art">Art</a> */}
                      </li>
                      <li>
                      <Link to="/artists">Artists</Link>
                        
                      </li>
                      <li>
                      <Link to="/digitize">Digitize your Art</Link>

                    
                      </li>
                      <li>
                      <Link to="/exhibition">Exhibitions</Link>

                       
                      </li>
                    </ul>
                  </li>
                  <li>
                  <Link to="/">The Gat3s</Link>

               
                  </li>
                  <li className="ft-dd">
                    <a href="/about_us">About Us</a>
                    <ul className="ft-dd-menu">
                      <li>
                      <Link to="/faq">Faq</Link>
                        {/* <a href="/faq">Faq</a> */}
                      </li>
                      <li>
                      <Link to="/term_Of_Service">Terms of service</Link>

                        {/* <a href="/term_Of_Service"></a> */}
                      </li>
                      <li>
                      <Link to="/privacy_policy">Privacy Policy</Link>

                        {/* <a href="/"></a> */}
                      </li>
                    </ul>
                  </li>
                  <li>
                  <Link to="/join_us">Join us</Link>
                  
                  </li>


                  <li className="ft-dd ">
                    <Link
                  
                      className="btn btn-warning btn-sm rounded-pill mx-3"
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      {walletAddress !== null ? (
                        <Link
                      
                          onClick={() => {
                            onDisconnect();
                          }}
                        >
                          Disconnect
                        </Link>
                      ) : (
                        "Connect Wallet"
                      )}
                    </Link>
                    <ul className="ft-dd-menu">
                      <li>
                        <Link
                          
                          onClick={() => {
                            connectWallet();
                          }}
                        >
                          MetaMask
                        </Link>
                      </li>
                      <li>
                        <Link
             
                          onClick={() => {
                            walletConnect();
                          }}
                        >
                          Wallet Connect
                        </Link>
                      </li>
                      <li>
                        <Link
                          
                          onClick={() => {
                            activate(CoinbaseWallet);
                          }}
                        >
                          Coinbase Wallet
                        </Link>
                      </li>
                    </ul>
                  </li>
                
                {/* User Dropdown */}
                {/*  */}
                { walletAddress !== null ?
                <li className="ft-dd">
                <Link
                // style={{ width: "fit-content", height: "fit-content" }}
                >
                  <img
                    style={{ width: "40px", borderRadius: "100px" }}
                    src="https://www.pngkey.com/png/detail/921-9211985_blockchain-cryptocurrency-wallet-ethereum-dogecoin-free-ethereum-png.png"
                    alt="img"
                  />
                </Link>

                <ul className="ft-dd-menu">
                      <li>
                        <Link
                         to="/"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                           to="/"
                        
                        >
                          Favorites
                        </Link>
                      </li>
                      <li>
                        <Link
                           to="/"
                         
                        >
                         Logout
                        </Link>
                      </li>
                    </ul>

                
                </li> : " "}
               
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar