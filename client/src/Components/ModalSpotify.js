import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalSpotify({personSpotify, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    return (
        <>
            {openModal ?
                <div className="modals">
                    <div id="modals-spotify-song" className="modals-box">
                        <div className="modals-content">
                            <h2>Song</h2>
                            <iframe
                                src={personSpotify}
                                width="100%"
                                height="80"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                            </iframe>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalSpotify;

// <iframe src="https://open.spotify.com/embed/track/51Ful1v7b81FchIFFTAQ05?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>