import React from 'react';

function LocationsPeople({picture, name, location}) {
    const nameArray = name.split(" ");
    const nameID = nameArray.join("");

    const locationArray = location.split(" ");
    const locationClass = locationArray.join("");
    
    return (
        <img
            id={nameID}
            className={`locations-people ${locationClass}`}
            src={picture}
            alt={name}
        />
    );
}

export default LocationsPeople;