import React, {useRef, useEffect, useCallback} from 'react';
import LocationsPeople from './LocationsPeople';
import {useSpring, animated} from "react-spring";
import {FixedSizeList as List} from "react-window";

function LocationsModal({showModal, setShowModal, renderPeople}) {
    // Using this to close the modal when clicking outside of the modal
    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    // Using react-spring to animation the modal popping up
    const animation = useSpring({
        config: {
            duration: 225
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    // Using this to close the modal using the 'Escape' key
    const escPress = useCallback(e => {
        if (e.key === "Escape" && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(() => {
        document.addEventListener("keydown", escPress);
        return () => document.removeEventListener("keydown", escPress);
    }, [escPress]);

    return (
        <>
        {showModal ?
            <div className="locations-background" ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <div className="locations-modal-box">
                    <h1>
                        {renderPeople[0]?.current_location} (Population: {renderPeople?.length})
                    </h1>
                    <hr/>

                    <ul className="locations-modal-ul">
                        {renderPeople?.map(person => {
                            return <LocationsPeople 
                                key={person?.name}
                                name={person?.name}
                                picture={person?.picture}
                                location={person?.location_from}
                            />
                        })}
                    </ul>

                <div className="locations-modal-content">
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>

                </div>
                </animated.div>
            </div>
        : null}
        </>
    );
}

export default LocationsModal;