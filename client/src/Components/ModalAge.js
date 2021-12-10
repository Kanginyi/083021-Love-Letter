import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalAge({personAge, openAge, setOpenAge}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openAge) {
            setOpenAge(false);
        }
    }, [openAge, setOpenAge]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    return (
        <>
            {openAge ?
                <div className="modals">
                    <div id="modals-age" className="modals-box">
                            <h2>Age</h2>
                        <div className="modals-content">
                            <p>
                                {personAge}
                            </p>
                        </div>
                        <button onClick={() => setOpenAge(false)}>X</button>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalAge;