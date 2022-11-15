import "./App.css";
import GetAccess from "./Components/get-access-component";
import HeroComponent from "./Components/hero-component";
import NavComponent from "./Components/nav-component";
import ProductivityComponent from "./Components/productivity-component.";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <ProductivityComponent />
      <GetAccess />
    </div>
  );
}

export default App;
