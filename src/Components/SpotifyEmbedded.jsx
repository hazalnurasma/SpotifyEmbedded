import React from 'react';
import './SpotifyEmbedded.css';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const SpotifyEmbedded = () => {
  return (
    <div className='spoti'>
    <Navbar />
    <Helmet>
      <title>Your Favorites</title>
    </Helmet>

      <div className="titles">

        <h2 className='main-title'>Favorite Albums</h2>
        <h5 className='sec-title'>You can view you favorite albums here and also can listen here.</h5>

      </div>

      <div className="album">

      <iframe
          className='frame'
          title="Spotify Embed"
          src="https://open.spotify.com/embed/album/3BIiOsLIJBsH9UJYFRqfxs?utm_source=generator"
          width="40%"
          height="370"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        >
        </iframe>

        <iframe 
        className='frame'
        title='Spotify Embed 2'
        style={{borderRadius: '12px'}} 
        src="https://open.spotify.com/embed/playlist/5Tutbb4GQCoPz0t2pxoTjB?utm_source=generator" 
        width="40%" height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>

      </div>
 
    </div>
  );
};

export default SpotifyEmbedded;
