import "./App.css";
import HeroComponent from "./Components/hero-component";
import NavComponent from "./Components/nav-component";
import ProductivityComponent from "./Components/productivity-component.";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <ProductivityComponent />
    </div>
  );
}

export default App;
