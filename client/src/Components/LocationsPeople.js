import React from 'react';

function LocationsPeople({name, picture, location}) {
    return (
        <>
        <li className="locations-modal-list">
            <img
                className="locations-modal-image"
                src={picture}
                alt={name}
                title={name}
            />
            <span>{name}</span>
            <span>Originally From: {location}</span>
        </li>
        </>
    );
}

export default LocationsPeople;