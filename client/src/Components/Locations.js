import React, {useState} from 'react';
import LocationsModal from './LocationsModal';
import "../Styling/Locations.css"

function Locations({personInfo}) {
    const [showModal, setShowModal] = useState(false);
    const [renderPeople, setRenderPeople] = useState("");

    // const listColors = [
    //     ["connecticut", "#00af00", "#67df67"],
    //     ["georgia", "#ffabb9", "#ffdbe1"],
    //     ["illinois", "#dfdb0b", "#fffd85"],
    //     ["maryland", "#ad00ad", "#ff65ff"],
    //     ["michigan", "#000080", "#0000eb"],
    //     ["new-jersey", "#f50000", "#ff6060"],
    //     ["new-york", "#000000", "#8f8f8f"],
    //     ["tennessee", "#00b5c2", "#6ff5ff"],
    //     ["texas", "#800000", "#b13d3d"],
    //     ["virginia", "#ffa600", "#ffc965"],
    //     ["buckinghamshire", "#a0a0ff", "#cbcbff"],
    // ];

    // const [gradientColor, setGradientColor] = useState([]);

    const openModal = e => {
        const matchLocation = personInfo?.filter(person => {
            if (person?.current_location.includes(" ")) {
                const spacedState = person?.current_location.replace(" ", "-");
                if (spacedState.toLowerCase() === e.target.id.toLowerCase()) {
                    return person;
                }
            } else if (person.current_location.toLowerCase() === e.target.id.toLowerCase()) {
                return person;
            }
        });

        // const chooseColor = listColors?.filter(array => array[0] === e.target.id);
        // setGradientColor(chooseColor);

        setRenderPeople(matchLocation);

        setShowModal(prevValue => !prevValue);
    }

    return (
        <>
        <LocationsModal showModal={showModal} setShowModal={setShowModal} renderPeople={renderPeople} openModal={openModal}/>
        {/*  gradientColor={gradientColor} */}
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
                src="https://i.imgur.com/I8rT5pX.png"
                alt="United States Map"   
            />
        </div>
        </>
    );
}

export default Locations;