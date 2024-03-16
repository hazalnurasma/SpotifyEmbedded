import React from 'react';

const SpotifyEmbedded = () => {
  return (
    <div>
      <h2>Hazal</h2>
      <iframe
        title="Spotify Embed"
        src="https://open.spotify.com/embed/album/3BIiOsLIJBsH9UJYFRqfxs?utm_source=generator"
        width="50%"
        height="370"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      ></iframe>
    </div>
  );
};

export default SpotifyEmbedded;
