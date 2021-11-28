import React, {useState, useEffect} from 'react';
import "../Styling/Cohort.css"

import CohortCarousel from './CohortCarousel';
import CohortInfoBox from './CohortInfoBox';
import CohortInfoCircle from './CohortInfoCircle';

function Cohort() {
    const [personInfo, setPersonInfo] = useState([]);

    useEffect(() => {
        fetch("/students")
            .then(resp => resp.json())
            .then(data => setPersonInfo(data));
    }, []);

    return (
        <>
            <h1>wtf</h1>
            <div>
                <CohortCarousel personInfo={personInfo}/>
            </div>
            <div className="cohort-info-divs">
                <CohortInfoBox personInfo={personInfo}/>
                <CohortInfoCircle personInfo={personInfo}/>
            </div>
        </>
    );
}

export default Cohort;