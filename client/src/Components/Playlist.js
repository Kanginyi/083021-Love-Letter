import React from 'react';
import "../Styling/Playlist.css"

function Playlist() {
    return (
        <>
            <div>
                <h1>Cohort Playlist</h1>
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?utm_source=generator"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
            </div>
        </>
    );
}

// Create 3 playlists, one for section a, b, and total

export default Playlist;