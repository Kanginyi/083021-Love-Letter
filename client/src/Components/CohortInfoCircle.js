import React, {useState} from 'react';
import CohortInfoCircleItem from './CohortInfoCircleItem';
import CohortOpenCircleItem from './CohortOpenCircleItem';
import CohortCloseCircleItem from './CohortCloseCircleItem';
import "../Styling/CohortInfoCircle.css"

import {AiFillGithub, AiOutlineNumber, AiFillStar} from "react-icons/ai";
import {FaSpotify, FaQuestionCircle} from "react-icons/fa";
import {IoFastFoodOutline} from "react-icons/io5";
import {MdDescription} from "react-icons/md";
import {GoLocation} from "react-icons/go"

function CohortInfoCircle({personInfo}) {
    // const renderPerson = personInfo?.map(person => {
    //     return <CohortPerson key={person.id} person={person}/>
    // });

    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => {
        setIsOpen(prevValue => !prevValue);
    }

    const menuIcons = [
        [<AiFillGithub className="icon-font-size"/>, "#3E84E6"], //Github
        [<IoFastFoodOutline className="icon-font-size"/>, "#15AB88"], //Favorite Food
        [<MdDescription className="icon-font-size"/>, "#EB5089"], //Hobbies
        [<GoLocation className="icon-font-size"/>, "#AFD91A"], //Current_Location
        [<AiOutlineNumber className="icon-font-size"/>, "#F27127"], //Age
        [<AiFillStar className="icon-font-size"/>, "#07C7F2"], //Rating
        [<FaQuestionCircle className="icon-font-size"/>, "#9768D1"], //Interesting Fact
        [<FaSpotify className="icon-font-size"/>, "#F2B705"] //Spotify
    ];
    
    return (
        <div className="page-container">
            <div className="circular-menu">
                <div className="menu-button" onClick={handleSetIsOpen}>
                    {isOpen ? <CohortCloseCircleItem/> : <CohortOpenCircleItem/>}
                </div>
                {
                    menuIcons.map(([icon, color], index) => (
                        <CohortInfoCircleItem
                            key={index}
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