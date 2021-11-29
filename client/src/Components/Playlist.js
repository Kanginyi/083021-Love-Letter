import React from 'react';
import "../Styling/Playlist.css"

function Playlist() {
    return (
        <>
            {/* <div id="playlist-container"> */}
                <h1>Cohort Playlist</h1>
                <iframe
                    title="Cohort Playlist"
                    src="https://open.spotify.com/embed/playlist/4mUmJlqIADouHmmh0NOuqY?utm_source=generator"
                    width="100%"
                    height="430"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                >
                </iframe>
                <div id="smaller-playlist-container">
                    <div id="section-a-playlist" className="smaller-playlist">
                        <h3>Section A Playlist</h3>
                        <iframe
                            title="Section A Playlist"
                            src="https://open.spotify.com/embed/playlist/0pOd875uB5eT9j9sXsTOya?utm_source=generator"
                            width="125%"
                            height="330"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        >
                        </iframe>
                    </div>
                    <div id="section-b-playlist" className="smaller-playlist">
                        <h3>Section B Playlist</h3>
                        <iframe
                            src="https://open.spotify.com/embed/playlist/2aYXKq795DAU7KR0dDyKJ7?utm_source=generator"
                            width="125%"
                            height="330"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        >
                        </iframe>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}

// Create 3 playlists, one for section a, b, and total

export default Playlist;