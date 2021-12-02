import React from 'react';
import "../Styling/Charts.css"
import ChartsAges from './ChartsAges';

function Charts({personInfo}) {
    // where originially from, age, flatiron rating, currently live, hobbies, food
    console.log(personInfo);

    const ageInformation = personInfo?.map(person => person.age);
    const ratingInformation = personInfo?.map(person => person.flatiron_rating);
    const locationInformation = personInfo?.map(person => person.current_location);

    // const renderPerson = personInfo?.map(person => {
    //     return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>
    // });

    return (
        <>
            <div className="chart-background">
                <div className="chart-title">Ages</div>
                <ChartsAges ageInformation={ageInformation}/>
            </div>
        </>
    );
}

export default Charts;