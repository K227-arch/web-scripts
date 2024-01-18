import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./services";
import Team from "./Team";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (
    <div classname="Wrapper">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Gallery/>
      {/* <Team /> */}
      <Footer/>
    </div>
  );
}

export default App;
