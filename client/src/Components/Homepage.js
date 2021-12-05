import React from 'react';
import "../Styling/Homepage.css"
import Login from './Login';

import {Link} from "react-router-dom";
import Signup from './Signup';

function Homepage({currentUser, setCurrentUser}) {
    // Add this to you navbar, functionality for your session delete
    // function logout (){
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         setCurrentUser(null);
    //         window.location.reload();
    //       }
    //     })
    //   }
    
    return (
        <>
        <div id="homepage-container">
            <h1>
                <u id="homepage-underline">
                    <span id="h1-color">083021 Cohort</span>
                </u>
            </h1>
            
            <div id="homepage-divs-container">

                <div className="homepage-div">
                    <Link className="div-links" to={"/cohort"}>Cohort</Link>
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
                    <Link className="div-links" to={"/comments"}>Comments</Link>
                    <p className="homepage-text">
                        View some comments here!
                    </p>
                </div>

            </div>

            <Login setCurrentUser={setCurrentUser} />
            <Signup setCurrentUser={setCurrentUser} />

        </div>
        </>
    );
}

export default Homepage;