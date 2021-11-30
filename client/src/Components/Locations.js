import React from 'react';
import LocationsPeople from './LocationsPeople';
import "../Styling/Locations.css"

function Locations({personInfo}) {
    const peopleBubbles = personInfo?.map(person => {
        return <LocationsPeople key={person.name} picture={person.picture} name={person.name} location={person.current_location}/>
    })

    // Location Arrays
    const locationGA = personInfo?.filter(person => person.current_location === "Georgia");
    const locationIL = personInfo?.filter(person => person.current_location === "Illinois");
    const locationMD = personInfo?.filter(person => person.current_location === "Maryland");
    const locationMI = personInfo?.filter(person => person.current_location === "Michigan");
    const locationNJ = personInfo?.filter(person => person.current_location === "New Jersey");
    const locationNY = personInfo?.filter(person => person.current_location === "New York");
    const locationTN = personInfo?.filter(person => person.current_location === "Tennessee");
    const locationTX = personInfo?.filter(person => person.current_location === "Texas");
    const locationVA = personInfo?.filter(person => person.current_location === "Virginia");

    return (
        <>
        <div id="united-state-map-container">
            {peopleBubbles}
            <img
                id="united-states-map"
                src="https://i.imgur.com/GGFrGLr.png"
                alt="United States Map"   
            />
        </div>
        </>
    );
}

export default Locations;

{/* <img
id={nameID}
className={`locations-people ${location}`}
src={picture}
alt={name}
/> */}