import "./App.css";
import HeroSection from "./components/HeroSection";
import Header from "./layouts/Header"
import Footer from "./layouts/Footer";
function App() {
  return (
    <div className=" bg-white">
      <Header />
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
