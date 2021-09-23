import Navi from "./components/Navbar/Navi";
import About from "./components/About/About";
import Landing from "./components/Landing/Landing";
import Team from "./components/Team/Team";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import Event from "./components/Event/Event";
import Position from "./components/Position_Holder/Position_Holder";
import Gallery from "./components/Gallery/Gallery";
import Downloads from "./components/Downloads/Download";

function App() {
  return (
    <div className="App">
      <Navi />
      <Landing />
      <About />
      <Event />
      <Gallery />
      <Team />
      <Position />
      <Downloads />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
