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
                    <a href="/">Home</a>
                  </li>
                  <li className="ft-dd">
                    <a href="/">Explore Art</a>
                    <ul className="ft-dd-menu">
                      <li> 
                        <Link to="/art">Art</Link>
                        {/* <a href="/art">Art</a> */}
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
                      href="#0"
                      className="btn btn-warning btn-sm rounded-pill mx-3"
                      style={{ width: "fit-content", height: "fit-content" }}
                    >
                      {walletAddress !== null ? (
                        <a
                          href="#0"
                          onClick={() => {
                            onDisconnect();
                          }}
                        >
                          Disconnect
                        </a>
                      ) : (
                        "Connect Wallet"
                      )}
                    </a>
                    <ul className="ft-dd-menu">
                      <li>
                        <a
                          href="#0"
                          onClick={() => {
                            connectWallet();
                          }}
                        >
                          MetaMask
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          onClick={() => {
                            walletConnect();
                          }}
                        >
                          Wallet Connect
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                          onClick={() => {
                            activate(CoinbaseWallet);
                          }}
                        >
                          Coinbase Wallet
                        </a>
                      </li>
                    </ul>
                  </li>
                
                {/* User Dropdown */}
                {/*  */}
                { walletAddress !== null ?
                <li className="ft-dd">
                <a href="#0"
                style={{ width: "fit-content", height: "fit-content" }}>
                  <img
                    style={{ width: "40px", borderRadius: "100px" }}
                    src="https://www.pngkey.com/png/detail/921-9211985_blockchain-cryptocurrency-wallet-ethereum-dogecoin-free-ethereum-png.png"
                    alt="img"
                  />
                </a>

                <ul className="ft-dd-menu">
                      <li>
                        <a
                          href="#0"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                        
                        >
                          Favorites
                        </a>
                      </li>
                      <li>
                        <a
                          href="#0"
                         
                        >
                         Logout
                        </a>
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