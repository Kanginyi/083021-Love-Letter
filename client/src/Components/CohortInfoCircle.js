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
    const choosePerson = personInfo?.find(person => person.name === clickedName)

    // This is going to be the information that's passed in through for each person
    const personGithub = choosePerson?.github;
    const personFood = choosePerson?.favorite_food;
    const personHobbies = choosePerson?.hobbies;
    const personLocation = choosePerson?.current_location;
    const personAge = choosePerson?.age;
    const personRating = choosePerson?.flatiron_rating;
    const personFact = choosePerson?.interesting_fact;
    const personSpotify = choosePerson?.song;

    // Is the modal open or not?
    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => {
        setIsOpen(prevValue => !prevValue);
    }

    // Click this to open the modal
    const [openModal, setOpenModal] = useState(false);

    // const [selectedModal, setSelectedModal] = ("");

    const handleSetOpenModal = e => {
        // Switch to check which modal to open up
        // switch (e.target.id) {
        //     case "modal-github":
        //         return <ModalGithub personGithub={personGithub} openModal={openModal} setOpenModal={setOpenModal}/>;
        //         break;
        // }

        /***************************** HEY MAKE SURE TO CHANGE THE THING SO THAT IF WE CLICK THE OVERALL BLACK MODAL BUTTON, IT WILL CLOSE ALL MODALS */


        console.log(e.target.id);
        
        setOpenModal(prevValue => !prevValue);
    }
    // Here we're going to change this openModal thing to handle ALL of the modal clicks and then take over which one with the onclick function


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
        {openModal && <ModalGithub personGithub={personGithub} openModal={openModal} setOpenModal={setOpenModal}/>}
        {/* Food */}
        {openModal && <ModalFood personFood={personFood} openModal={openModal} setOpenModal={setOpenModal}/>}
        {/* Hobbies */}
        {openModal && <ModalHobbies personHobbies={personHobbies} openModal={openModal} setOpenModal={setOpenModal}/>}
        {/* Location */}
        {openModal && <ModalLocation personLocation={personLocation} openModal={openModal} setOpenModal={setOpenModal}/>}
        {/* Age */}
        {openModal && <ModalAge personAge={personAge} openModal={openModal} setOpenModal={setOpenModal}/>}
        {/* Rating */}
        {openModal && <ModalRating personRating={personRating} openModal={openModal} setOpenModal={setOpenModal}/>}


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
                            openModal={openModal}
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