import React, {useState} from 'react';
import LocationsPeople from './LocationsPeople';
import LocationsCircleItem from './LocationsCircleItem';
import "../Styling/Locations.css"

function Locations({personInfo}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => {
        setIsOpen(prevValue => !prevValue);
    }

    const peopleBubbles = personInfo?.map(person => {
        return <LocationsPeople key={person.name} picture={person.picture} name={person.name} location={person.current_location} isOpen={isOpen}/>
    })

    // Location Arrays
    const locationGA = personInfo?.filter(person => person.current_location === "Georgia");
    const locationIL = personInfo?.filter(person => person.current_location === "Illinois");
    const locationMD = personInfo?.filter(person => person.current_location === "Maryland");
    const locationMI = personInfo?.filter(person => person.current_location === "Michigan");
    const locationNY = personInfo?.filter(person => person.current_location === "New York");
    const locationTN = personInfo?.filter(person => person.current_location === "Tennessee");
    const locationTX = personInfo?.filter(person => person.current_location === "Texas");
    const locationVA = personInfo?.filter(person => person.current_location === "Virginia");

    const virginiaHoes = locationVA.map((person, index) => {
        return (
            <LocationsCircleItem
                handleSetIsOpen={handleSetIsOpen}
                picture={person.picture}
                rotation = {360 / locationVA.length * index}
                isOpen={isOpen}
                transitionDelay={index * 75}
            />
        )
    })

    // const virginiaHoes = locationVA.map(person => {
    //     return <img src={person.picture} alt={person.name}/>
    // })
    // console.log(virginiaHoes)

    return (
        <>
        <div id="united-state-map-container">
            {peopleBubbles}
            {virginiaHoes}
            <img
                id="united-states-map"
                src="https://i.imgur.com/GGFrGLr.png"
                alt="United States Map"   
            />
        </div>
        </>
    );
}

export default Locations;

{/* <img
id={nameID}
className={`locations-people ${location}`}
src={picture}
alt={name}
/> */}