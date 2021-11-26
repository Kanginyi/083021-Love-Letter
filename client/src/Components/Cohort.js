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
            <CohortCarousel personInfo={personInfo}/>
            <CohortInfoBox />
            <CohortInfoCircle personInfo={personInfo}/>
        </>
    );
}

export default Cohort;