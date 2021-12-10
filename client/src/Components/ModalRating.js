import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalRating({personRating, instructorYears, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    const yearOrYears = instructorYears === 1 ? `${instructorYears} Year` : `${instructorYears} Years`;


    return (
        <>
            {openModal ?
                <div className="modals">
                    <div id="modals-flatiron-rating" className="modals-box">
                        <h2>{personRating ? "Flatiron Rating" : "Worked at Flatiron"}</h2>
                        <div className="modals-content">
                            <p>
                                {personRating ? `${personRating}/10` : yearOrYears}
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