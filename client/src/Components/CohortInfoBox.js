import React, {useState} from 'react';
import "../Styling/CohortInfoBox.css"

function CohortInfoBox({personInfo, clickedName}) {
    const choosePerson = personInfo?.find(person => person.name === clickedName)


    // HEY HEY UPDATE THE THING SO THAT THERE'S ACTUALLY SOMETHING THAT'S THERE ON PAGE LOAD

    // Bing usestate inside of this shit and then set it equal to a empty string
    // if it's that, conditional render each of the component things inside the card
    // set the initial states to the empy things

    // Ribbon thing on youtube

    const flipCard = () => {
        const card = document.querySelector(".card-inner");
        card.classList.toggle("is-flipped");
    }

    // Add a thing where it'll erase the front part of the card when you send it to the back

    return (
        // <div className="card">
        //     <div className="card-header">{clickedName !== "" ? choosePerson?.name : "Click an Image"}</div>
        //     <div className="card-body">
        //         <img
        //             className="card-image"
        //             src={clickedName !== "" ? choosePerson?.picture : "https://i.imgur.com/gaxXG7T.jpg"}
        //             alt={choosePerson?.name}
        //             title={choosePerson?.name}
        //             width="100%"
        //         /> <br/>
        //         {clickedName !== "" ? choosePerson?.description : "Please?"}
        //     </div>
        //     <div className="card-footer">
        //         From: {clickedName !== "" ? choosePerson?.location_from : "???"}
        //     </div>
        // </div>

        <div className="card" onClick={flipCard}>
            <div className="card-inner">
                <div className="card-face card-face-front">
                    <h2>Click Me!</h2>
                </div>
                <div className="card-face card-face-back">
                    <div className="card-content">
                        <div className="card-header">
                            <h2>{clickedName !== "" ? choosePerson?.name : "Click an Image"}</h2>
                            <img className="card-image" src={clickedName !== "" ? choosePerson?.picture : "https://i.imgur.com/gaxXG7T.jpg"} alt={choosePerson?.name} title={choosePerson?.name} width="100%"/>
                        </div>
                        <div className="card-body">
                            <p>{clickedName !== "" ? choosePerson?.description : ""}</p>
                            <p>{clickedName !== "" ? `From: ${choosePerson?.location_from}` : ""}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CohortInfoBox;

//Load these inside of the fill in bbox on the side

// description: "An idiot trying to learn how to not be an idiot."
// location_from: "New York City, New York"