import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalLocation({personLocation, openModal, setOpenModal}) {
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
                    <div id="modals-current-location" className="modals-box">
                        <div className="modals-content">
                            <h2>Current Location</h2>
                            <p>
                                {personLocation}
                            </p>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalLocation;