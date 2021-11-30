import React from 'react';

function LocationsCircleItem({name, picture, rotation, openImage, transitionDelay}) {
    return (
        <div
            className="menu-item"
            style={{
                transform: `rotate(${rotation}deg) translate(${openImage ? 175 : 0}%)`,
                transitionDelay: `${openImage ? transitionDelay : 0}ms`
            }}
        >
            <span style={{transform: `rotate(${-rotation}deg)`}}>
                <img className="locations-people" src={picture} alt={name}/>
            </span>
        </div>
    );
}

export default LocationsCircleItem;