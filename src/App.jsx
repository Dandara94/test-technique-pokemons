import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";

const App = () => {
  // const hello = "World";
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemons" element={<Pokemons/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
