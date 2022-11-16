import FooterComponent from "./Components/footer-component";
import GetAccess from "./Components/get-access-component";
import HeroComponent from "./Components/hero-component";
import NavComponent from "./Components/nav-component";
import ProductivityComponent from "./Components/productivity-component.";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <ProductivityComponent />
      <GetAccess />
      <FooterComponent />
    </div>
  );
}

export default App;
