import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-body bg-deep min-h-screen">
      <Navbar />
      <main className="pt-16 min-h-[60vh]" />
      <Footer />
    </div>
  );
}

export default App;