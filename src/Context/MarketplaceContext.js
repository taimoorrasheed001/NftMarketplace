import React, {useState} from 'react'
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnect from "@walletconnect/client";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { useWeb3React } from "@web3-react/core"
// import { injected } from "./Connecters"
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletlink-connector";
// import axios from 'axios';
// import Web3Modal from "web3modal";
const INFURA_RPC_URL = `https://goerli.infura.io/v3/d108cbf7c0324759b58462e343d6cbe3`;
const DEFAULT_CHAIN_ID = 1;
window.Buffer = window.Buffer || require("buffer").Buffer; 

export const  MarketplaceContext = React.createContext();

export const MarketplaceProvider = ({ children }) => {
  const { active, account, activate, deactivate } = useWeb3React()
  const refreshState = () => { window.localStorage.setItem("provider", undefined) };

  const disconnect = () => {
    refreshState();
    deactivate();
    
  };

  // async function connect() {
  //   try {
  //     await activate(injected)
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }


  const CoinbaseWallet = new WalletLinkConnector({

    url: `https://mainnet.infura.io/v3/${INFURA_RPC_URL}`,
   
    appName: "Web3-react Demo",
   
    supportedChainIds: [1, 3, 4, 5, 42],
   
   });

  // async function disconnect() {
  //   try {
  //     deactivate()
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

    const testTitles = "this test title"

    const [walletAddress, setWalletAddress] = useState("");
    

    const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        
        console.log(accounts[0]);
        // window.location.reload();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

    const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  //   const addWalletListener = async () => {
  //   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       setWalletAddress(accounts[0]);
  //       console.log(accounts[0]);
  //     });
  //   } else {
  //     /* MetaMask is not installed */
  //     setWalletAddress("");
  //     console.log("Please install MetaMask");
  //   }
  // };

  //coinbase wallet 

  // Coinbase Wallet Provider
 const getCoinbaseWalletProvider = () => {
    const coinbaseWallet = new CoinbaseWalletSDK({
      appName: "APP_NAME",
      appLogoUrl: "APP_LOGO_URL",
      darkMode: false,
      overrideIsMetaMask: false
    });
    return coinbaseWallet.makeWeb3Provider(INFURA_RPC_URL, DEFAULT_CHAIN_ID);
  };

  // wallet connect

  const walletConnect = async () => {
    // bridge url
    const bridge = "https://bridge.walletconnect.org";

    // create new connector
    const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

    // await this.setState({ connector });

    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    
    }

    // subscribe to events
    await this.subscribeToEvents();

    setWalletAddress(connector);
    window.location.reload();
    console.log(connector);
  };


  const onDisconnect = async () => {
    // await Web3Modal.clearCachedProvider();
    window.localStorage.clear();
    console.log('onDisconnect')
    refreshState();
    setWalletAddress(null);
    console.log(walletAddress);
  }
  


    return (
        <MarketplaceContext.Provider 
         value={{
            testTitles,
            connectWallet,
            CoinbaseWallet,
            account,
            active,
            activate,
            disconnect,
            getCurrentWalletConnected,
            getCoinbaseWalletProvider,
            walletConnect,
            walletAddress,
            onDisconnect
          }}>
            {children}
        </MarketplaceContext.Provider>
    );
}




// const MarketplaceContext = () => {
//   return (
//     <div>MarketplaceContext</div>
//   )
// }

// export default MarketplaceContext