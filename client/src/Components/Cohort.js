import React from 'react';
import "../Styling/Cohort.css"

import CohortCarousel from './CohortCarousel';
import CohortInfoBox from './CohortInfoBox';
import CohortInfoCircle from './CohortInfoCircle';

function Cohort({personInfo, handleImageClick, clickedName}) {
    return (
        <>
            <h1 id="cohort-welcome-title">
                COHORT&nbsp;MEMBERS
            </h1>
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
                    handleImageClick={handleImageClick}
                />
                <CohortInfoCircle
                    personInfo={personInfo}
                    clickedName={clickedName}
                />
            </div>
        </>
    );
}

export default Cohort;