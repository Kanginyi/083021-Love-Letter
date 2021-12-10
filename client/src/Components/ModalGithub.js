import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

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

    return (
        <>
            {openGithub ?
                <div className="modals">
                    <div id="modals-github-link" className="modals-box">
                        <h2>GitHub Link</h2>
                        <div className="modals-content">
                            <p>
                                <a href={personGithub} target="_blank" title="Take me to Github!">          
                                    {personGithub}
                                </a>
                            </p>
                            <button onClick={() => setOpenGithub(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalGithub;