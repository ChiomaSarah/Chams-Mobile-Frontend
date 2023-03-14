import GetMovies from "./components/GetMovies";
import AddMovie from "./components/AddMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/movies" element={<GetMovies />}></Route>
        <Route path="/add-movie" element={<AddMovie />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
