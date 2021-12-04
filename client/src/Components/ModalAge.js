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
                        <div className="modals-content">
                            <h2>Age</h2>
                            <p>
                                {personAge}
                            </p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalAge;