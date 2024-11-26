import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Banner from "./components/Banner/Banner";
import ForFans from "./components/ForFans/ForFans";
import Features from "./components/Features/Features";
import SharePlaylists from "./components/SharePlaylists/SharePlaylists";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container">
          <Banner />
          <ForFans />
          <Features />
          <SharePlaylists />
          <Wishlist />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
