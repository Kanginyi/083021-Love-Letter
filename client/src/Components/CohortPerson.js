import React from 'react';
import "../Styling/CohortPerson.css"

function CohortPerson({person}) {
    return (
        <div>
            <h3>Name: {person.name}</h3>
            <img src={person.picture} alt={person.name} title={person.name} width="200px"/>
        </div>
    );
}

export default CohortPerson;


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