import React from 'react';
import "../Styling/CohortCarousel.css"
import Slider from "react-slick";

import CohortPerson from './CohortPerson';

function CohortCarousel({personInfo, handleImageClick}) {
    
    const renderPerson = personInfo?.map(person => {
        return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>
    });


    return (
        <div>
            <h1>asdf</h1>
            <div>
                {renderPerson}
            </div>
        </div>
    );
}

export default CohortCarousel;