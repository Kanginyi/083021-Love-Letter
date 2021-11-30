import React from 'react';
import LocationsPeople from './LocationsPeople';
import "../Styling/Locations.css"

function Locations({personInfo}) {
    const peopleBubbles = personInfo?.map(person => {
        return <LocationsPeople key={person.name} picture={person.picture} name={person.name} location={person.current_location}/>
    })

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