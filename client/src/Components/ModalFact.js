import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalFact({personFact, openModal, setOpenModal}) {
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
                    <div id="modals-interesting-fact" className="modals-box">
                        <h2>Interesting Fact</h2>
                        <div className="modals-content">
                            <p>
                                {personFact}
                            </p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalFact;