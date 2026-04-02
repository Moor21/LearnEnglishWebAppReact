import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import { CardsProvider } from "./contexts/CardsContext";
import Navbar from "./components/Navbar";
function App() {
  return (
    <CardsProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cards" element={<CardsPage />}></Route>
        </Routes>
      </div>
    </CardsProvider>
  );
}

export default App;
