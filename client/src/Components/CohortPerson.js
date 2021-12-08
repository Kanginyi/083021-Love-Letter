import React from 'react';
import "../Styling/CohortPerson.css"

function CohortPerson({person, handleImageClick}) {
    return (
        <>
        <a href="#show-person-card">
        <img
            className="carousel-image-box"
            onClick={(e) => handleImageClick(e.target.alt)}
            src={person?.picture}
            alt={person?.name}
            title={person?.name}
            width="150px"
            height="150px"
        />
        </a>
        </>
    );
}

export default CohortPerson;