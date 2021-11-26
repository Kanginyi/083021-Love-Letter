import React from 'react';
import Slider from "react-slick";

import CohortPerson from './CohortPerson';

function CohortCarousel({personInfo}) {
    
    const renderPerson = personInfo?.map(person => {
        return <CohortPerson key={person.id} person={person}/>
    });


    return (
        <div>
            <h1>asdf</h1> 
            {renderPerson}
        </div>
    );
}

export default CohortCarousel;