import React from 'react';
import "../Styling/MonopolyBoard.scss";

import {DiJavascript1, DiRuby} from "react-icons/di";
import {GiRailRoad} from "react-icons/gi";
import {GrPowerCycle} from "react-icons/gr";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import {SiRubyonrails} from "react-icons/si";

function MonopolyBoard() {
	const flipChance = () => {
		const card = document.querySelector(".board-card-inner");
		card.classList.toggle("is-flipped");
	}

	const flipCommunity = () => {
		const card = document.querySelector(".board-card-inner2");
		card.classList.toggle("is-flipped2");
	}

	return (
		<>
		   {/* Monopoly Board */}
		   <div className="table">
			<div className="board">

				<div className="board-card chance1">
					Chance
				</div>
				<div className="board-card chance2">
					Chance
				</div>
				<div className="board-card chance3">
					Chance
				</div>
				<div className="board-card main-chance" onClick={flipChance}>
					<div className="board-card-inner">
						<div className="board-card-face board-card-front">
							<h4>Chance</h4>
						</div>
						<div className="board-card-face board-card-back">
							<div className="board-card-content">
								<p>There's always a chance to learn and grow. Take those challenges and fuck them up. ❤</p>
							</div>
						</div>
					</div>
				</div>

				<div className="board-card community1">
					Community Chest
				</div>
				<div className="board-card community2">
					Community Chest
				</div>
				<div className="board-card community3">
					Community Chest
				</div>
				<div className="board-card main-community" onClick={flipCommunity}>
					<div className="board-card-inner2">
						<div className="board-card-face board-card-front">
							<h4>Community Chest</h4>
						</div>
						<div className="board-card-face board-card-back">
							<div className="board-card-content">
								<p>Thanks for being such a great community for me to grow in. ❤</p>
							</div>
						</div>
					</div>
				</div>

				<div className="center">
					<div className="community-chest-deck">
						<h2 className="label">Community Chest</h2>
						<div className="deck"></div>
					</div>
					<h1 className="title">MONOPOLY</h1>
					<div className="chance-deck">
						<h2 className="label">Chance</h2>
						<div className="deck"></div>
					</div>
				</div>

				<div className="space corner go">
					<div className="monopoly-container">
						<div className="instructions">Collect $200.00 salary as you pass</div>
						<div className="go-word">go</div>
					</div>
					<div className="arrow fa fa-long-arrow-left"></div>
				</div>

				<div className="row horizontal-row bottom-row">
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar light-blue"></div>
							<div className="name">Sowande's <br/> Mannequin</div>
							<div className="price">PRICE $120</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar light-blue"></div>
							<div className="name">Mohammad's <br/> P4 Project</div>
							<div className="price">Price $100</div>
						</div>
					</div>
					<div className="space chance">
						<div className="monopoly-container">
							<div className="name">Phase 1</div>
                            <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center"}}><DiJavascript1/></div>
                            <div className="name">Make it stop</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar light-blue"></div>
							<div className="name">Jason <br/> Brown's <br/> Jackhammer</div>
							<div className="price">Price $100</div>
						</div>
					</div>
					<div className="space railroad">
						<div className="monopoly-container">
							<div className="name">Joseph's <br/> Jeep</div>
							<div className="drawing" style={{marginTop: "-30px"}}>🚙</div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space fee income-tax">
						<div className="monopoly-container">
							<div className="name">Lecture Time</div>
							<div className="diamond"></div>
							<div className="instructions">Sleep <br/> or <br/> Cry</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar dark-purple"></div>
							<div className="name"> Zoom <br/> Backgrounds </div>
							<div className="price">Price $50</div>
						</div>
					</div>
					<div className="space community-chest">
						<div className="monopoly-container">
							<div className="name">PreWork</div>
                            <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center", color: "#5e3577"}}><BsFillArrowLeftCircleFill/></div>
							<div className="instructions">Start of it all</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar dark-purple"></div>
							<div className="name three-line-name"> Fear <br/> of the <br/> Unknown </div>
							<div className="price">Price $50</div>
						</div>
					</div>
				</div>

				<div className="space corner jail">
					<div className="just">Brain</div>
					<div className="drawing">
						<div className="monopoly-container">
							<div className="name">Take</div>
							<div className="window">
								<div className="bar"></div>
								<div className="bar"></div>
								<div className="bar"></div>
                                <div className="person" style={{marginTop: "-5px"}}>🤥</div>
							</div>
							<div className="name">CC</div>
						</div>
					</div>
					<div className="visiting">Hurts</div>
				</div>

				<div className="row vertical-row left-row">
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar orange"></div>
							<div className="name">Josh's <br/> Accent</div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar orange"></div>
							<div className="name">Kevin's Coocool Quotes</div>
							<div className="price">Price $180</div>
						</div>
					</div>
					<div className="space community-chest">
						<div className="monopoly-container">
							<div className="name">Phase 2</div>
                            <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center", color: "#a0e1ff"}}><FaReact/></div>
							<div className="instructions">Did not <br/> React well</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar orange"></div>
							<div className="name">Jon P's <br/> Github <br/> Sweater</div>
							<div className="price">Price $180</div>
						</div>
					</div>
					<div className="space railroad">
						<div className="monopoly-container">
							<div className="name long-name">Quang's Spaceship</div>
                            <div className="drawing" style={{marginTop: "-15px"}}>🛸</div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar purple"></div>
							<div className="name">Cody's <br/> Vape</div>
							<div className="price">Price $160</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar purple"></div>
							<div className="name">David's <br/> World <br/> Record</div>
							<div className="price">Price $140</div>
						</div>
					</div>
					<div className="space utility electric-company">
						<div className="monopoly-container">
							<div className="name">Great Idea!</div>
                            <div className="drawing" style={{marginTop: "-10px"}}>💡</div>
							<div className="price">Price $150</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar purple"></div>
							<div className="name">Nick A's Brothers</div>
							<div className="price">Price $140</div>
						</div>
					</div>
				</div>

				<div className="space corner free-parking">
					<div className="monopoly-container">
						<div className="name">Great</div>
						<i className="drawing fa fa-car"></i>
						<div className="name">Friendships</div>
					</div>
				</div>

				<div className="row horizontal-row top-row">
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar red"></div>
							<div className="name">Matt B's <br/> Beats</div>
							<div className="price">Price $220</div>
						</div>
					</div>
					<div className="space chance">
						<div className="monopoly-container">
							<div className="name">Phase 3</div><br/>
                            <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center", color: "#f50c2b"}}><DiRuby style={{fontSize: "55px"}}/></div> <br/>
                            <div className="name">Ruby or <br/> not Ruby</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar red"></div>
							<div className="name">Devin's <br/> Comedy <br/> Show</div>
							<div className="price">Price $220</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar red"></div>
							<div className="name">Dilshan's <br/> CSS <br/> Fingers</div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space railroad">
						<div className="monopoly-container">
							<div className="name">Sam's <br/> Running <br/> Shoes</div>
							<i className="drawing fa fa-subway"></i>
                            <div className="drawing" style={{marginTop: "-60px"}}>👟</div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar yellow"></div>
							<div className="name">Paul's <br/> Mean <br/> Mug</div>
							<div className="price">Price $260</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar yellow"></div>
							<div className="name">Seneiya's <br/> Valorant <br/> Skins</div>
							<div className="price">Price $260</div>
						</div>
					</div>
					<div className="space utility waterworks">
						<div className="monopoly-container">
							<div className="name">Mental <br/> Boom</div>
                            <div className="drawing" style={{marginTop: "-10px"}}>🤯</div>
							<div className="price">Price $120</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar yellow"></div>
							<div className="name">Xinyi's <br/> Moose</div>
							<div className="price">Price $280</div>
						</div>
					</div>
				</div>

				<div className="space corner go-to-jail">
					<div className="monopoly-container">
						<div className="name">Retake Code Challenge</div>
                        <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center", color: "#f50c2b", marginTop: "-20px"}}><GrPowerCycle style={{fontSize: "25px", marginTop: "20px"}}/></div>
					</div>
				</div>

				<div className="row vertical-row right-row">
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar green"></div>
							<div className="name">Alan's <br/> Couch</div>
							<div className="price">Price $300</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar green"></div>
							<div className="name three-line-name">Charlie's Dogs</div>
							<div className="price">Price $300</div>
						</div>
					</div>
					<div className="space community-chest">
						<div className="monopoly-container">
							<div className="name">Phase 4</div>
                            <div className="drawing" style={{display: "flex", justifyContent: "center", alignContent: "center", color: "#f50c2b"}}><SiRubyonrails style={{fontSize: "60px"}}/></div> <br/>
							<div className="instructions">Ruby <br/> Railed Me</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar green"></div>
							<div className="name long-name">Eric's Cat</div>
							<div className="price">Price $320</div>
						</div>
					</div>
					<div className="space railroad">
						<div className="monopoly-container">
							<div className="name">Ruby on <br/> Rails</div>
                            <div className="drawing" style={{color: "#41994e"}}><GiRailRoad/></div>
							<div className="price">Price $200</div>
						</div>
					</div>
					<div className="space community-chest">
						<div className="monopoly-container">
							<div className="name">Phase 5</div>
							<i className="drawing fa fa-cube"></i>
							<div className="name">Where is everyone?</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar dark-blue"></div>
							<div className="name">Greg's <br/> Juice <br/> Hats</div>
							<div className="price">Price $350</div>
						</div>
					</div>
					<div className="space fee luxury-tax">
						<div className="monopoly-container">
							<div className="name">Flatiron <br/> Fee</div>
                            <div className="drawing" style={{marginTop: "-5px"}}>💰</div>
							<div className="instructions">Pay $16,900</div>
						</div>
					</div>
					<div className="space property">
						<div className="monopoly-container">
							<div className="color-bar dark-blue"></div>
							<div className="name">Adam's <br/> Gundam <br/> Suit</div>
							<div className="price">Price $400</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	);
}

export default MonopolyBoard;