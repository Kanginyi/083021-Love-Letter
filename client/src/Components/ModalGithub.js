import React, {useEffect, useCallback} from "react";
import "../Styling/Modal.css"

function ModalGithub({personGithub, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    // console.log(personSpotify);
    // Get this shit to render as the spotify link later
    // const spotifyIFrames = personSpotify?.replace(/^\'<iframe[\s\S]+iframe>\'/gi, "");
    

    return (
        <>
            {openModal ?
                <div className="modals">
                    <div className="modals-box">
                        <div className="modals-content">
                            <h2>GitHub Link</h2>
                            <p><a href={personGithub} target="_blank">{personGithub}</a></p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalGithub;