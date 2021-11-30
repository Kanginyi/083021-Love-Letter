import React from 'react';

function LocationsCircleItem({handleSetIsOpen, picture, rotation, isOpen, transitionDelay}) {
    return (
        <div
            className="menu-item"
            style={{
                transform: `rotate(${rotation}deg) translate(${isOpen ? 175 : 0}%)`,
                transitionDelay: `${isOpen ? transitionDelay : 0}ms`
            }}
        >
            <span style={{transform: `rotate(${-rotation}deg)`}}>
                <img onClick={handleSetIsOpen} className="locations-people" src={picture} alt="Bingus"/>
            </span>
        </div>
    );
}

export default LocationsCircleItem;