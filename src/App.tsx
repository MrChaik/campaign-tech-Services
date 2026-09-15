import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="font-body bg-deep min-h-screen">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;