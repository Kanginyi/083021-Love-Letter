import React from 'react';

function CohortUnfort({name, picture}) {
    return (
        <>
            <img
                className="carousel-image-box"
                src={picture}
                alt={name}
                title={`No available data on ${name} :^(`}
                width="150px"
                height="150px"
            />
        </>
    );
}

export default CohortUnfort;