import React, {useState} from 'react';
import CohortInfoCircleItem from './CohortInfoCircleItem';
import CohortOpenCircleItem from './CohortOpenCircleItem';
import CohortCloseCircleItem from './CohortCloseCircleItem';
import "../Styling/CohortInfoCircle.css"

// *THIS IS A TEST, DOUNLE CHECK THIS SHIT LATER
import ModalGithub from './ModalGithub';
import ModalFood from './ModalFood';
import ModalHobbies from './ModalHobbies';
import ModalLocation from './ModalLocation';
import ModalAge from './ModalAge';
import ModalRating from './ModalRating';
import ModalFact from './ModalFact';
import ModalSpotify from './ModalSpotify';


import {AiFillGithub, AiOutlineNumber, AiFillStar} from "react-icons/ai";
import {FaSpotify, FaQuestionCircle} from "react-icons/fa";
import {IoFastFoodOutline} from "react-icons/io5";
import {MdDescription} from "react-icons/md";
import {GoLocation} from "react-icons/go"

function CohortInfoCircle({personInfo, clickedName}) {
    const totalArray = [personInfo[0]?.instructor]?.concat(personInfo, [personInfo[31]?.instructor]);

    const choosePerson = totalArray?.find(person => person?.name === clickedName)

    // This is going to be the information that's passed in through for each person
    const personGithub = choosePerson?.github;
    const personFood = choosePerson?.favorite_food;
    const personHobbies = choosePerson?.hobbies;
    const personLocation = choosePerson?.current_location;
    const personAge = choosePerson?.age;
    const personRating = choosePerson?.flatiron_rating;
    const personFact = choosePerson?.interesting_fact;
    const personSpotify = choosePerson?.song;

    const instructorYears = choosePerson?.years_worked;

    // Is the modal open or not?
    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => {
        setIsOpen(prevValue => !prevValue);
    }

    // Click this to open the modal
   
    const [openGithub, setOpenGithub] = useState(false);
    const [openFood, setOpenFood] = useState(false);
    const [openHobbies, setOpenHobbies] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);
    const [openAge, setOpenAge] = useState(false);
    const [openRating, setOpenRating] = useState(false);
    const [openFact, setOpenFact] = useState(false);
    const [openSpotify, setOpenSpotify] = useState(false);


    const handleSetOpenModal = (id) => {
         switch (id) {
            case "modal-github":
                console.log("hiaosidhf")
                setOpenGithub(prevValue => !prevValue);
                break;
            case "modal-food":
                setOpenFood(prevValue => !prevValue);
                break;
            case "modal-hobbies":
                setOpenHobbies(prevValue => !prevValue);
                break;
            case "modal-location":
                setOpenLocation(prevValue => !prevValue);
                break;
            case "modal-age":
                setOpenAge(prevValue => !prevValue);
                break;
            case "modal-rating":
                setOpenRating(prevValue => !prevValue);
                break;
            case "modal-fact":
                setOpenFact(prevValue => !prevValue);
                break;
            case "modal-spotify":
                setOpenSpotify(prevValue => !prevValue);
                break;
        }
    }

    // Array of arrays that we're mapping over
    const menuIcons = [
        ["modal-github", <AiFillGithub className="icon-font-size"/>, "#3E84E6"], //Github
        ["modal-food", <IoFastFoodOutline className="icon-font-size"/>, "#F2B705"], //Favorite Food
        ["modal-hobbies", <MdDescription className="icon-font-size"/>, "#EB5089"], //Hobbies
        ["modal-location", <GoLocation className="icon-font-size"/>, "#AFD91A"], //Current_Location
        ["modal-age", <AiOutlineNumber className="icon-font-size"/>, "#F27127"], //Age
        ["modal-rating", <AiFillStar className="icon-font-size"/>, "#07C7F2"], //Rating
        ["modal-fact", <FaQuestionCircle className="icon-font-size"/>, "#9768D1"], //Interesting Fact
        ["modal-spotify", <FaSpotify className="icon-font-size"/>, "#15AB88"] //Spotify"#3E84E6"
    ];
    
    return (
        <>
        {/* Github */}
        {openGithub && clickedName && <ModalGithub personGithub={personGithub} openGithub={openGithub} setOpenGithub={setOpenGithub} handleSetOpenModal={handleSetOpenModal}/>}
        {/* Food */}
        {openFood && clickedName && <ModalFood personFood={personFood} openFood={openFood} setOpenFood={setOpenFood}/>}
        {/* Hobbies */}
        {openHobbies && clickedName && <ModalHobbies personHobbies={personHobbies} openHobbies={openHobbies} setOpenHobbies={setOpenHobbies}/>}
        {/* Location */}
        {openLocation && clickedName && <ModalLocation personLocation={personLocation} openLocation={openLocation} setOpenLocation={setOpenLocation}/>}
        {/* Age */}
        {openAge && clickedName && <ModalAge personAge={personAge} openAge={openAge} setOpenAge={setOpenAge}/>}
        {/* Rating */}
        {openRating && clickedName && <ModalRating personRating={personRating} instructorYears={instructorYears} openRating={openRating} setOpenRating={setOpenRating}/>}
        {/* Fact */}
        {openFact && clickedName && <ModalFact personFact={personFact} openFact={openFact} setOpenFact={setOpenFact}/>}
        {/* Spotify */}
        {openSpotify && clickedName && <ModalSpotify personSpotify={personSpotify} openSpotify={openSpotify} setOpenSpotify={setOpenSpotify}/>}

        <div className="page-container">
            <div className="circular-menu">
                <div className="menu-button" onClick={handleSetIsOpen}>
                    {isOpen ? <CohortCloseCircleItem/> : <CohortOpenCircleItem/>}
                </div>
                {
                    menuIcons.map(([id, icon, color], index) => (
                        <CohortInfoCircleItem
                            id={id}
                            key={index}
                            handleSetOpenModal={handleSetOpenModal}
                            icon={icon}
                            color={color}
                            rotation={360 / menuIcons.length * index}
                            isOpen={isOpen}
                            transitionDelay={index * 75}
                        />
                    ))
                }
            </div>
        </div>
        </>
    );
}

export default CohortInfoCircle;

// age: 26
// current_location: "New York"
// description: "An idiot trying to learn how to not be an idiot."
// favorite_food: "Sushi, Korean BBQ, Noodles"
// flatiron_rating: 9
// github: "https://github.com/Kanginyi"
// hobbies: "Video games, reading, walking around with my cat, "
// id: 5
// instructor: {id: 1, name: 'Dickhead McGee'}
// interesting_fact: "I have a polydactyl cat named Henri who has 7 fingers on both of his front two paws!"
// location_from: "New York City, New York"
// picture: "https://i.imgur.com/T3Dnjf6.jpg"
// song: "<iframe src=\"https://open.spotify.com/embed/track/51Ful1v7b81FchIFFTAQ05