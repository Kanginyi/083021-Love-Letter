import React, {useEffect, useCallback} from "react";
import "../Styling/Modal.css"

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

    // Create a function that makes it so the thing is separates based on comma, render into list
    console.log(personFood);

    const foodArray = personFood?.split(", ");

    const listFoods = foodArray?.map(food => {
        return <li key={food}>{food}</li>
    })

    console.log(listFoods);

    return (
        <>
            {openFood ?
                <div className="modals">
                    <div className="modals-box">
                        <div className="modals-content">
                            <h2>Favorite Food</h2>
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