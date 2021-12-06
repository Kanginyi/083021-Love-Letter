import React from 'react';
import "../Styling/Homepage.css"

function Homepage() {
    return (
        <>
			<div id="homepage-container">
				<div id="homepage-title-background">
					<h1 id="homepage-transparent-title">
						WELCOME TO SE 083021
					</h1>
				</div>
			</div>

            <div className="content">

                <div className="grid">
					<figure className="effect-cohort">
						<img src="https://i.imgur.com/IxD5rWY.jpg" alt="Flatiron School students at work"/>
						<figcaption>
							<h2>Cohort <span>Members</span></h2>
							<p>Learn more about the people in our cohort.</p>
							<a href="/cohort"></a>
						</figcaption>
					</figure>
				</div>

				<div className="grid">
					<figure className="effect-locations">
						<img src="https://i.imgur.com/drvQ1lp.png" alt="Planning a trip over a map"/>
						<figcaption>
							<h2>Current <span>Locations</span></h2>
							<p>View where we were while studying.</p>
							<a href="/locations">View more</a>
						</figcaption>
					</figure>
				</div>

				<div className="grid">
					<figure className="effect-spotify">
						<img src="https://i.imgur.com/BGHp8M1.png" alt="Image of a Spotify Playlist"/>
						<figcaption>
							<h2>Spotify <span>Playlist</span></h2>
							<p>Music curated by the cohort members.<br/><br/>Enjoy!</p>
							<a href="/playlist"></a>
						</figcaption>
					</figure>
				</div>

                <div className="grid">
					<figure className="effect-comments">
						<img src="https://i.imgur.com/cxnrc2V.png" alt="A group of friends laughing over something"/>
						<figcaption>
							<h2>Comments <span>Board</span></h2>
							<p>Add and view comments left by cohort members.</p>
							<a href="/comments"></a>
						</figcaption>
					</figure>
				</div>

			</div>
        </>
    );
}

export default Homepage;