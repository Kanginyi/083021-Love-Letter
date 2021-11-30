import React from 'react';
import "../Styling/Playlist.css"

import {GiMusicalNotes, GiMusicalScore} from "react-icons/gi"
import {IoMusicalNoteOutline, IoMusicalNotesOutline, IoMusicalNoteSharp, IoMusicalNotesSharp} from "react-icons/io5"

function Playlist() {
    return (
        <>
            <h1 className="align-text-center"><GiMusicalScore/>Cohort Playlist<GiMusicalNotes/></h1>
            <iframe
                className="playlist-border"
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
                    <h3 className="align-text-center"><IoMusicalNoteOutline/>Section A Playlist<IoMusicalNotesOutline/></h3>
                    <iframe
                        className="playlist-border"
                        title="Section A Playlist"
                        src="https://open.spotify.com/embed/playlist/0pOd875uB5eT9j9sXsTOya?utm_source=generator"
                        width="100%"
                        height="330"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    >
                    </iframe>
                </div>
                <div id="section-b-playlist" className="smaller-playlist">
                    <h3 className="align-text-center"><IoMusicalNoteSharp/>Section B Playlist<IoMusicalNotesSharp/></h3>
                    <iframe
                        className="playlist-border"
                        src="https://open.spotify.com/embed/playlist/2aYXKq795DAU7KR0dDyKJ7?utm_source=generator"
                        width="100%"
                        height="330"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    >
                    </iframe>
                </div>
            </div>
        </>
    );
}

// Create 3 playlists, one for section a, b, and total

export default Playlist;