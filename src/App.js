import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Dog from "./pages/Dog";
import Search from "./pages/Search";
import DogFood from "./pages/DogFood";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/dogfood" element={<DogFood />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
