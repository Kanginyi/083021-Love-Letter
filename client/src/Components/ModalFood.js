import React, {useEffect, useCallback} from "react";
import "../Styling/CohortModals.css"

function ModalFood({personFood, openFood, setOpenFood}) {
    const escPress = useCallback(e => {
        if (e.key === "Escape" && openFood) {
            setOpenFood(false);
        }
    }, [openFood, setOpenFood]);

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
            {openFood ?
                <div className="modals">
                    <div id="modals-favorite-foods" className="modals-box">
                        <h2>Favorite Food</h2>
                        <div className="modals-content">
                            <ul>
                                {listFoods}
                            </ul>
                            <button onClick={() => setOpenFood(false)}>X</button>
                        </div>
                    </div>
                </div>
            : null}
        </>
    );
}

export default ModalFood;