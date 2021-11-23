import React from 'react';
import "../Styling/Homepage.css"

import {Link} from "react-router-dom";

function Homepage() {
    return (
        <>
        <div id="homepage-container">
            <h1>083021 Cohort</h1>
            
            <div id="homepage-divs-container">

                <div className="homepage-div">
                    <Link className="div-links" to={"/people"}>People</Link>
                    <p className="homepage-text">
                        View Instructors and Students
                    </p>
                </div>

                <div className="homepage-div">
                    <Link className="div-links" to={"/locations"}>Locations</Link>
                    <p className="homepage-text">
                        Check out where everyone in our cohort is located.
                    </p>
                </div>

                <div className="homepage-div">
                    <Link className="div-links" to={"/playlist"}>Playlist</Link>
                    <p className="homepage-text">
                        Check out our cohort playlist!
                    </p>
                </div>

                <div className="homepage-div">
                    <Link className="div-links" to={"/options"}>Options</Link>
                    <p className="homepage-text">
                        Choose some options here!
                    </p>
                </div>

            </div>

        </div>
        </>
    );
}

export default Homepage;