import React, {useState, useEffect} from 'react';
import "../Styling/Cohort.css"

import CohortCarousel from './CohortCarousel';
import CohortInfoBox from './CohortInfoBox';
import CohortInfoCircle from './CohortInfoCircle';

function Cohort() {
    const [personInfo, setPersonInfo] = useState([]);
    const [clickedName, setClickedName] = useState("");

    useEffect(() => {
        fetch("/students")
            .then(resp => resp.json())
            .then(data => setPersonInfo(data));
    }, []);

    const handleImageClick = (name) => {
        setClickedName(name);
    }

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