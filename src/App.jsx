import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Components/SpotifyEmbedded';
import './App.css';
import SpotifyEmbedded from './Components/SpotifyEmbedded';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<SpotifyEmbedded />} />
      </Routes>

    </Router>

  );
}

export default App;
