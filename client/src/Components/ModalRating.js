import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalRating({personRating, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    console.log(personRating);

    return (
        <>
            {openModal ?
                <div className="modals">
                    <div id="modals-flatiron-rating" className="modals-box">
                        <h2>Flatiron Rating</h2>
                        <div className="modals-content">
                            <p>
                                {personRating ? `${personRating}/10` : ""}
                            </p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalRating; 