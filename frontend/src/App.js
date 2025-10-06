import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FioreHero from "./components/FioreHero";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FioreHero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
