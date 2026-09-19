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

function App() {
  return (
    <div className="font-body bg-deep min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;