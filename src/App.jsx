import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import BitrixShowcase from "./components/BitrixShowcase";
import FeatureSlider from "./components/FeatureSlider";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Bitrix24CRM from './pages/Bitrix24CRM';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import IndustryVertical from "./components/IndustryVertical";
import Contact from "./pages/ContactUs";
import DepartmentSection from "./components/DepartmentSection";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="font-sans">
        <Navbar onAuthOpen={() => setShowAuth(true)} />

        <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero />
        <BitrixShowcase />
        <FeatureSlider />
        <Technology />
        <IndustryVertical />
        <DepartmentSection />
        <Testimonial />
        <WhyChooseUs />
        
       
      </>
    }
  />

  <Route path="/bitrix24crm" element={<Bitrix24CRM />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about" element={<AboutUs />} /> {/* ✅ Fixed */}
  <Route path="/contact" element={<Contact />} />
</Routes>




        <AuthModal visible={showAuth} onClose={() => setShowAuth(false)} />
           <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
