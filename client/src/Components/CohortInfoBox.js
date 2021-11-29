import React from 'react';
import "../Styling/CohortInfoBox.css"

function CohortInfoBox({personInfo, clickedName}) {
    const choosePerson = personInfo?.find(person => person.name === clickedName)

    return (
        <div className="card">
            <div className="card-header">{choosePerson?.name}</div>
            <div className="card-body">
                <img
                    src={choosePerson?.picture}
                    alt={choosePerson?.name}
                    title={choosePerson?.name}
                    width="100%"
                /> <br/>
                {choosePerson?.description}
            </div>
            <div className="card-footer">
                {choosePerson?.location_from}
            </div>
        </div>
    );
}

export default CohortInfoBox;

// HEY HEY UPDATE THE THING SO THAT THERE'S ACTUALLY SOMETHING THAT'S THERE ON PAGE LOAD

//Load these inside of the fill in bbox on the side

// description: "An idiot trying to learn how to not be an idiot."
// location_from: "New York City, New York"