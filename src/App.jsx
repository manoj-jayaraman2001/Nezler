import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Joinus from "./components/Joinus";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import SEO from "./ServiceComponents/Seo";
import VideoMarketing from "./ServiceComponents/VideoMarket";
import PaidAds from "./ServiceComponents/PaidAds";
import EndtoEnd from "./ServiceComponents/EndtoEnd";
import EmailMarketing from "./ServiceComponents/EmailMarketing";
import WebsiteDev from "./ServiceComponents/WordPressDev";
import Uiux from "./ServiceComponents/Uiux";
import Analytics from "./ServiceComponents/AnalyticsandReports";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route  path = "/" element={<Home />} />
        <Route  path = "About" element={<About />} />
        <Route  path = "Contact" element={<Contact />} />
        <Route  path = "Services" element={<Services />} />
        <Route  path = "Joinus" element={<Joinus />} />
        <Route  path = "Joinus" element={<Joinus />} />
        <Route  path = "Privacy" element={<PrivacyPolicy />} />
        <Route  path = "Terms" element={<Terms />} />
        <Route  path = "SEO" element={<SEO />} />
        <Route  path = "video" element={<VideoMarketing />} />
        <Route  path = "end" element={<EndtoEnd />} />
        <Route  path = "paid" element={<PaidAds />} />
        <Route  path = "email" element={<EmailMarketing />} />
        <Route  path = "website" element={<WebsiteDev />} />
        <Route  path = "uiux" element={<Uiux />} />
        <Route  path = "analytics" element={<Analytics />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
