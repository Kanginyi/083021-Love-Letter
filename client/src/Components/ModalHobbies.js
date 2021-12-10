import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalHobbies({personHobbies, openHobbies, setOpenHobbies}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openHobbies) {
            setOpenHobbies(false);
        }
    }, [openHobbies, setOpenHobbies]);

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
            {openHobbies ?
                <div className="modals">
                    <div id="modals-hobbies" className="modals-box">
                        <h2>Hobbies</h2>
                        <div className="modals-content">
                            <ul>
                                {listHobbies}
                            </ul>
                            <button onClick={() => setOpenHobbies(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalHobbies;    