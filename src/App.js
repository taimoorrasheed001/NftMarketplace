import './App.css';
import { Route, Routes } from 'react-router-dom';
import { MarketplaceProvider } from './Context/MarketplaceContext';
import AboutUs from './components/AboutUs';
import Activity from './components/Activity';
import Art from './components/Art';
import ArtDetails from './components/ArtDetails';
import ArtistDetails from './components/ArtistDetails';
import Artists from './components/Artists';
import ComingSoon from './components/ComingSoon';
import Dashboard from './components/Dashboard';
import Digitize from './components/Digitize';
import Exhibition from './components/Exhibition';
import FeaturedItems from './components/FeaturedItems';
import LiveBidding from './components/LiveBidding';
import LiveBids from './components/LiveBids';
import Main from './components/Main';
import MyCollections from './components/MyCollections';
import MyWallet from './components/MyWallet';
import JoinUs from './components/JoinUs';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Faq from './components/Faq';
import Sattings from './components/Sattings';
import DigitizeNew from './components/DigitizeNew';
import ExhibitionArtists from './components/ExhibitionArtists';
import CreateNft from './components/CreateNft';
import Favourite from './components/Favourite';
import Notifications from './components/Notifications';
import ArtistDashboard from './components/Artist Dashboard/ArtistDashboard';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import Navbar  from './components/Navbar';
  
function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  
  
  return (
    <div className="App">
      
      <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Component /> */}
      <MarketplaceProvider >
      <Navbar/>

        <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/digitizeOld" element={<Digitize/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/art" element={<Art/>} />
        <Route path="/exhibition" element={<Exhibition/>} />
        <Route path="/about_us" element={<AboutUs/>} />
        <Route path="/join_us" element={<JoinUs/>} />
        <Route path="/my_collections" element={<MyCollections/>} />
        <Route path="/my_wallet" element={<MyWallet/>} />
        <Route path="/featured_items" element={<FeaturedItems/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/activity" element={<Activity/>} />
        <Route path="/art_details" element={<ArtDetails/>} />
        <Route path="/artist_details" element={<ArtistDetails/>} />
        <Route path="/live_bidding" element={<LiveBidding/>} />
        <Route path="/live_bid" element={<LiveBids/>} />
        <Route path="/coming_soon" element={<ComingSoon/>} />
        <Route path="/term_Of_Service" element={<TermsOfService/>} />
        <Route path="/privacy_policy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/sattings" element={<Sattings/>} />
        <Route path="/digitize" element={<DigitizeNew/>} />
        <Route path="/exhibition-artist" element={<ExhibitionArtists/>} />
        <Route path="/create-nft" element={<CreateNft/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/notification" element={<Notifications/>} />
        <Route path="/artist_dashboard" element={<ArtistDashboard/>} />

     </Routes>
    
     </MarketplaceProvider>
     </Web3ReactProvider>
    </div>
  );
}

export default App;
