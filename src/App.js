import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import FormControl from "./components/FormControl";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <h2>The Gallery Of Dreams..</h2>
      <br />
      <Carousel />
      <h2>Trending In Deviant Community</h2>
      <Grid />

      <h2>Let Us Know How You Feel About Our Work</h2>
      <FormControl />

      <Footer />
    </div>
  );
}

export default App;
