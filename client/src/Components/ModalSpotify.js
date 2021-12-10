import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalSpotify({personSpotify, openSpotify, setOpenSpotify}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openSpotify) {
            setOpenSpotify(false);
        }
    }, [openSpotify, setOpenSpotify]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    return (
        <>
            {openSpotify ?
                <div className="modals">
                    <div id="modals-spotify-song" className="modals-box">
                        <h2>Song</h2>
                        <div className="modals-content">
                            <iframe
                                src={personSpotify}
                                title="Spotify Modal"
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                            </iframe>
                            <button onClick={() => setOpenSpotify(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalSpotify;