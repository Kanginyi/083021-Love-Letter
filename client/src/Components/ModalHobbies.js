import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalHobbies({personHobbies, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    // Create a function that separates each hobby into an li for the list
    const hobbiesArray = personHobbies?.split(", ");

    const listHobbies = hobbiesArray?.map(hobby => {
        return <li key={hobby}>{hobby}</li>
    })

    return (
        <>
            {openModal ?
                <div className="modals">
                    <div id="modals-hobbies" className="modals-box">
                        <div className="modals-content">
                            <h2>Hobbies</h2>
                            <ul>
                                {listHobbies}
                            </ul>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalHobbies;    