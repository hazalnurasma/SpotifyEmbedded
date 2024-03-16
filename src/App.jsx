import './Components/SpotifyEmbedded';
import './App.css';
import SpotifyEmbedded from './Components/SpotifyEmbedded';
import { Content } from './Components/Content';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <SpotifyEmbedded />
    </>

  );
}

export default App;
