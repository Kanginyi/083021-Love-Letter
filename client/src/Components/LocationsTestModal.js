import React, {useRef, useEffect, useCallback} from 'react';
import {useSpring, animated} from "react-spring";

function LocationsTestModal({showModal, setShowModal}) {
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
            duration: 350
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
                    <img src="google.com" alt="fucking idiot" className="locations-image"/>
                    <div className="locations-modal-content">
                        <p>Bingbong</p>
                        <button onClick={() => setShowModal(false)}>X</button>
                    </div>
                </div>
                </animated.div>
            </div>
        : null}
        </>
    );
}

export default LocationsTestModal;

// IMPORT DATA