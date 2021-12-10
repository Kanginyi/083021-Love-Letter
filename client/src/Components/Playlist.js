import React, {useState, useEffect} from 'react';
import "../Styling/Playlist.css"

function Playlist() {
    // This is going to see which like/dislike is clicked
    const [isClicked, setIsClicked] = useState(1);

    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetch("/playlist/likes")
            .then(resp => resp.json())
            .then(data => setLikes(data.likes));
    }, [])

    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        fetch("/playlist/likes")
            .then(resp => resp.json())
            .then(data => setDislikes(data.dislikes));
    }, [])


    const handleLikes = () => {
        fetch("/playlist/likes", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({likes: likes})
        })
            .then(resp => resp.json())
            .then(data => setLikes(() => data.likes))

        if (isClicked === 3) {
            fetch("/playlist/minus_dislikes", {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({dislikes: dislikes})
            })
                .then(resp => resp.json())
                .then(data => setDislikes(data.dislikes))
        }

        setIsClicked(2);
    }

    const handleDislikes = () => {
        fetch("/playlist/dislikes", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({dislikes: dislikes})
        })
            .then(resp => resp.json())
            .then(data => setDislikes(() => data.dislikes))

        if (isClicked === 2) {
            fetch("/playlist/minus_likes", {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({likes: likes})
            })
                .then(resp => resp.json())
                .then(data => setLikes(data.likes))
        }

        setIsClicked(3);
    }

    const noPressed = <>
                        <button
                            className="like-button-hover"
                            onClick={handleLikes}
                        >I like this
                        </button>

                        <button
                            className="dislike-button-hover"
                            onClick={handleDislikes}
                        >I don't like this
                        </button>
                    </>

    const likesPressed = <>
                    <button
                        id="like-pressed"
                        disabled="disabled"
                        onClick={handleLikes}
                    >{likes} Likes
                    </button> 

                    <button
                        className="dislike-button-hover"
                        onClick={handleDislikes}
                    >{dislikes} Dislikes
                    </button>
                </>

    const dislikesPressed = <>
                    <button
                        className="like-button-hover"
                        onClick={handleLikes}
                    >{likes} Likes
                    </button>

                    <button
                        id="dislike-pressed"
                        disabled="disabled"
                        onClick={handleDislikes}
                    >{dislikes} Dislikes
                    </button>
                </>

    return (
        <>
            <h1 className="align-text-center text-shadow">Cohort Playlist</h1>

            <div className="playlist-buttons-container">
                    {isClicked === 1 ? noPressed :
                     isClicked === 2 ? likesPressed :
                     dislikesPressed}
            </div>
                <br/>
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
                <div id="section-a-playlist" className="smaller-playlist text-shadow">
                    <h3 className="align-text-center">Section A Playlist</h3>
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
                <div id="section-b-playlist" className="smaller-playlist text-shadow">
                    <h3 className="align-text-center">Section B Playlist</h3>
                    <iframe
                        className="playlist-border"
                        title="Section B Playlist"
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

export default Playlist;