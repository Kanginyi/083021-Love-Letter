import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalFood({personFood, openModal, setOpenModal}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openModal) {
            setOpenModal(false);
        }
    }, [openModal, setOpenModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress])

    // Create a function that separates each food into an li for the list
    const foodArray = personFood?.split(", ");

    const listFoods = foodArray?.map(food => {
        return <li key={food}>{food}</li>
    })

    return (
        <>
            {openModal ?
                <div className="modals">
                    <div id="modals-favorite-foods" className="modals-box">
                        <div className="modals-content">
                            <h2>Favorite Food</h2>
                            <ul>
                                {listFoods}
                            </ul>
                            <button onClick={() => setOpenModal(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalFood;