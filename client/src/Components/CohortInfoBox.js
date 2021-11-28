import React from 'react';
import "../Styling/CohortInfoBox.css"

function CohortInfoBox({personInfo}) {
    console.log(personInfo);

    return (
        <div className="card">
            <div className="card-header">{personInfo[4].name}</div>
            <div className="card-body">
                <img
                    src={personInfo[4].picture}
                    alt={personInfo[4].name}
                    title={personInfo[4].name}
                    width="100%"
                /> <br/>
                {personInfo[4].description}
            </div>
            <div className="card-footer">
                {personInfo[4].location_from}
            </div>
        </div>
    );
}

export default CohortInfoBox;

//Load these inside of the fill in bbox on the side

// description: "An idiot trying to learn how to not be an idiot."
// location_from: "New York City, New York"

// age: 26
// current_location: "New York"
// description: "An idiot trying to learn how to not be an idiot."
// favorite_food: "Sushi, Korean BBQ, Noodles"
// flatiron_rating: 9
// github: "https://github.com/Kanginyi"
// hobbies: "Video games, reading, walking around with my cat, "
// id: 5
// instructor: {id: 1, name: 'Dickhead McGee'}
// interesting_fact: "I have a polydactyl cat named Henri who has 7 fingers on both of his front two paws!"
// location_from: "New York City, New York"
// picture: "https://i.imgur.com/T3Dnjf6.jpg"
// song: "<iframe src=\"https://open.spotify.com/embed/track/51Ful1v7b81FchIFFTAQ05