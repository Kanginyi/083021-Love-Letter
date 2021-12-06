import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalAge({personAge, openModal, setOpenModal}) {
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
                    <div id="modals-age" className="modals-box">
                            <h2>Age</h2>
                        <div className="modals-content">
                            <p>
                                {personAge}
                            </p>
                        </div>
                        <button onClick={() => setOpenModal(false)}>X</button>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalAge;