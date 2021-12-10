import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalLocation({personLocation, openLocation, setOpenLocation}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openLocation) {
            setOpenLocation(false);
        }
    }, [openLocation, setOpenLocation]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    return (
        <>
            {openLocation ?
                <div className="modals">
                    <div id="modals-current-location" className="modals-box">
                        <h2>Current Location</h2>
                        <div className="modals-content">
                            <p>
                                {personLocation}
                            </p>
                            <button onClick={() => setOpenLocation(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalLocation;