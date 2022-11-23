import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <h2>Trending In Deviant Community</h2>
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
