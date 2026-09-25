import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TrustedPartner from "./components/sections/TrustedPartner";
import WhatWeDo from "./components/sections/WhatWeDo";
import OurServices from "./components/sections/OurServices";
import AIProcessing from "./components/sections/AIProcessing";
import Communication from "./components/sections/Communication";
import InnovationSolutions from "./components/sections/InnovationSolutions";
import BuiltForScale from "./components/sections/BuiltForScale";
import ClosingSection from "./components/sections/ClosingSection";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import LegalPage from "./pages/LegalPage";
import ServicePage from "./pages/services/ServicePage";

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedPartner />
      <WhatWeDo />
      <OurServices />
      <AIProcessing />
      <Communication />
      <InnovationSolutions />
      <BuiltForScale />
      <ClosingSection />
    </main>
  );
}

function App() {
  return (
    <div className="font-body bg-deep min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/privacy-policy" element={<LegalPage title="Privacy Policy" />} />
        <Route path="/terms-and-conditions" element={<LegalPage title="Terms and Conditions" />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;