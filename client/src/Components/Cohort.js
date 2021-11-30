import React from 'react';
import "../Styling/Cohort.css"

import CohortCarousel from './CohortCarousel';
import CohortInfoBox from './CohortInfoBox';
import CohortInfoCircle from './CohortInfoCircle';

function Cohort({personInfo, handleImageClick, clickedName}) {
    return (
        <>
            <h1>wtf</h1>
            <div>
                <CohortCarousel
                    personInfo={personInfo}
                    handleImageClick={handleImageClick}
                />
            </div>
            <div className="cohort-info-divs">
                <CohortInfoBox
                    personInfo={personInfo}
                    clickedName={clickedName}
                />
                <CohortInfoCircle personInfo={personInfo}/>
            </div>
        </>
    );
}

export default Cohort;