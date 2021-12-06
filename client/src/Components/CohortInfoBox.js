import React from 'react';
import "../Styling/CohortInfoBox.css"

function CohortInfoBox({personInfo, clickedName, handleImageClick}) {
    const choosePerson = personInfo?.find(person => person.name === clickedName)

    const flipCard = () => {
        const card = document.querySelector(".card-inner");
        card.classList.toggle("is-flipped");

        // if (clickedName) {
        //     handleImageClick("")
        // }
    }

    // Add a thing where it'll erase the front part of the card when you send it to the back

    return (
        <div id="show-person-card" className="card" onClick={flipCard}>
            <div className="card-inner">
                <div className="card-face card-face-front">
                    <h2>Click Me!</h2>
                </div>
                <div className="card-face card-face-back">
                    <div className="card-content">
                        <div className="card-header">
                            <h2>
                                {clickedName !== "" ? choosePerson?.name : "Click an Image"}
                            </h2>
                            <img
                                className="card-image"
                                src={clickedName !== "" ? choosePerson?.picture : "https://i.imgur.com/gaxXG7T.jpg"}
                                alt={choosePerson?.name}
                                title={choosePerson?.name}
                                width="100%"
                            />
                        </div>
                        <div className="card-body">
                            <p id="card-location-from">
                                {clickedName !== "" ? `From: ${choosePerson?.location_from}` : ""}
                            </p>
                            <p id="card-personal-description">
                                {clickedName !== "" ? choosePerson?.description : ""}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CohortInfoBox;