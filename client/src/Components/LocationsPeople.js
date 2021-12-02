import React from 'react';


function LocationsPeople({name, picture, location}) {
    return (
        <>
        <li className="locations-modal-list">
            <img
                className="locations-modal-image"
                src={picture}
                alt={name}
            />
            <p><b>{name}</b><br/>
                Originally From:<br/>
                {location}
            </p>
        </li>
        </>
    );
}

export default LocationsPeople;