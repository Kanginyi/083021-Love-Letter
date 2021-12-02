import React, {useEffect, useCallback} from "react";
import "../Styling/Modal.css"

function ModalGithub({personGithub, openGithub, setOpenGithub}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openGithub) {
            setOpenGithub(false);
        }
    }, [openGithub, setOpenGithub]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    // console.log(personSpotify);
    // Get this shit to render as the spotify link later
    // const spotifyIFrames = personSpotify?.replace(/^\'<iframe[\s\S]+iframe>\'/gi, "");
    

    return (
        <>
            {openGithub ?
                <div className="modals">
                    <div className="modals-box">
                        <div className="modals-content">
                            <h2>GitHub Link</h2>
                            <p><a href={personGithub} target="_blank">{personGithub}</a></p>
                            <button onClick={() => setOpenGithub(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalGithub;