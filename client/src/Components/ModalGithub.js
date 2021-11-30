import React, {useEffect, useCallback} from "react";
import "../Styling/Modal.css"

function ModalGithub({openModal, setOpenModal}) {
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
                    <div className="modals-box">
                        <div className="modals-content">
                            <h2>GitHub Link</h2>
                            <p><a href="http://github.com" target="_blank">Github</a></p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}

        </>

        // <div className="modal-background">

        //     <div className="modal-container">
        //         <button onClick={() => setOpenModal(false)}> &times; </button>
        //         <div class="modal-title">
        //             <h1>GitHub Link:</h1>
        //         </div>
        //         <div class="modal-body">
        //             <a href="http://github.com" target="_blank">Github</a>
        //         </div>
        //         <div class="modal-footer">
        //             <p>Bingus Amingus</p>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ModalGithub;