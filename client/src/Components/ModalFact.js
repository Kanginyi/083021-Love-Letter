import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalFact({personFact, openFact, setOpenFact}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openFact) {
            setOpenFact(false);
        }
    }, [openFact, setOpenFact]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    return (
        <>
            {openFact ?
                <div className="modals">
                    <div id="modals-interesting-fact" className="modals-box">
                        <h2>Interesting Fact</h2>
                        <div className="modals-content">
                            <p>
                                {personFact}
                            </p>
                            <button onClick={() => setOpenFact(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalFact;