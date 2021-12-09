import React, {useState} from 'react';
import LocationsModal from './LocationsModal';
import "../Styling/Locations.css"

function Locations({personInfo}) {
    const [showModal, setShowModal] = useState(false);
    const [renderPeople, setRenderPeople] = useState("");

    const [clickedState, setClickedState] = useState("");

    const totalArray = [personInfo[0]?.instructor]?.concat(personInfo, [personInfo[31]?.instructor]);

    const openModal = e => {
        const matchLocation = totalArray?.filter(person => {
            if (person?.current_location.includes(" ")) {
                const spacedState = person?.current_location.replace(" ", "-");
                if (spacedState.toLowerCase() === e.target.id.toLowerCase()) {
                    return person;
                }
            } else if (person.current_location.toLowerCase() === e.target.id.toLowerCase()) {
                return person;
            }
        });

        setClickedState(e.target.id);

        setRenderPeople(matchLocation);

        setShowModal(prevValue => !prevValue);
    }

    return (
        <>
        <LocationsModal showModal={showModal} setShowModal={setShowModal} renderPeople={renderPeople} openModal={openModal} clickedState={clickedState}/>
        
        <div id="united-states-map-container">
            {/* Connecticut */}
            <div id="connecticut" className="locations-states" onClick={openModal}>
                CT
            </div>

            {/* Georgia */}
            <div id="georgia" className="locations-states" onClick={openModal}>
                GA
            </div>

            {/* Illinois */}
            <div id="illinois" className="locations-states" onClick={openModal}>
                IL
            </div>

            {/* Maryland */}
            <div id="maryland" className="locations-states" onClick={openModal}>
                MD
            </div>

            {/* Michigan */}
            <div id="michigan" className="locations-states" onClick={openModal}>
                MI
            </div>

            {/* New Jersey */}
            <div id="new-jersey" className="locations-states" onClick={openModal}>
                NJ
            </div>

            {/* New York */}
            <div id="new-york" className="locations-states" onClick={openModal}>
                NY
            </div>

            {/* Rhode Island */}
            <div id="rhode-island" className="locations-states" onClick={openModal}>
                RI
            </div>

            {/* Tennessee */}
            <div id="tennessee" className="locations-states" onClick={openModal}>
                TN
            </div>

            {/* Texas */}
            <div id="texas" className="locations-states" onClick={openModal}>
                TX
            </div>

            {/* Virginia */}
            <div id="virginia" className="locations-states" onClick={openModal}>
                VA
            </div>

            {/* United Kingdom */}
            <div id="buckinghamshire" className="locations-states" onClick={openModal}>
                UK
            </div>

            <img
                id="united-states-map"
                // src="https://i.imgur.com/ZB9oo5D.png" Black Border US Map
                src="https://i.imgur.com/KJjnGRO.png"
                alt="United States Map"   
            />
        </div>
        </>
    );
}

export default Locations;