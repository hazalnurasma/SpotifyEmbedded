import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/SpotifyEmbedded';
import './App.css';
import SpotifyEmbedded from './Components/SpotifyEmbedded';
// import Navbar from './Components/Navbar';
import BlogPage from "./Components/BlogPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/SpotifyEmbedded" element={<SpotifyEmbedded />} />
        <Route path="/BlogPage" element={<BlogPage />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>

    </Router>

  );
}

export default App;
