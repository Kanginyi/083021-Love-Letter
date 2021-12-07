import React, {useState, useEffect} from 'react';
import "../Styling/CohortCarousel.css"
import Slider from "react-slick";

import CohortPerson from './CohortPerson';
import CohortUnfort from './CohortUnfort';

import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

function CohortCarousel({personInfo, handleImageClick}) {
    // Right and Left Arrows for Carousel
    const NextArrow = ({onClick}) => {
        return (
            <div className="carousel-arrow next-arrow" onClick={onClick}>
                <FaArrowAltCircleRight/>
            </div>
        );
    };

    const PrevArrow = ({onClick}) => {
        return (
            <div className="carousel-arrow prev-arrow" onClick={onClick}>
                <FaArrowAltCircleLeft/>
            </div>
        );
    };

    // Essentially, which is the selected image?
    const [slideIndex, setSlideIndex] = useState(0);
    
    // const renderPerson = personInfo?.map(person => {
    //     return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>
    // });

    // Fetch the Unforts
    const [unfortInfo, setUnfortInfo] = useState([]);

    useEffect(() => {
        fetch("/unfortunates")
            .then(resp => resp.json())
            .then(data => setUnfortInfo(data));
    }, []);

    const renderUnfort = 
        <div id="render-unfort" className="carousel-render-divs">
            {unfortInfo?.map(person => {
                return <CohortUnfort key={person.id} name={person.name} picture={person.picture}/>})}
        </div>;

    // Fetch instructors
    // const [instructorInfo, setInstructorInfo] = useState([]);

    // useEffect(() => {
    //     fetch("/instructors")
    //         .then(resp => resp.json())
    //         .then(data => setInstructorInfo(data));
    // }, []);

    const sectionA = personInfo?.filter(person => person.instructor.name === "Adam Johnson" && person.id !== 20);
    const sectionB = personInfo?.filter(person => person.instructor.name === "Gregory Dwyer");
    

    const renderSectionA =
        <>
        <div id="adam-johnson">
            {/* {<CohortPerson person={personInfo[0]?.instructor} handleImageClick={handleImageClick}/>} */}
        </div>
        <div id="render-sectionA" className="carousel-render-divs">
            {sectionA?.map(person => {
                return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>})}
        </div>
        </>

    const renderSectionB =
        <>
        <div id="greg-dwyer">
            {/* {<CohortPerson person={instructorInfo[1]} handleImageClick={handleImageClick}/>} */}
        </div>
        <div id="render-sectionB" className="carousel-render-divs">
            {sectionB?.map(person => {
                return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>})}
        </div>
        </>
    
    const renderAlan = 
        <div className="carousel-render-divs">
            {<CohortPerson person={personInfo[19]} handleImageClick={handleImageClick}/>}
        </div>


    const c = <div>c</div>
    const array = [renderSectionA, renderSectionB, renderAlan, renderUnfort];


    // Slider's Setting Props
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        draggable: true,
        centerPadding: 0,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setSlideIndex(next)
    }


    return (
        <div className="cohort-carousel-container">
            <Slider {...settings}>
                {array.map((slide, index) => (
                    <div className={index === slideIndex ? "slide active-slide" : "slide"}>
                        {slide}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CohortCarousel;