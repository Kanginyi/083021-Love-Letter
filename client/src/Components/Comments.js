import React from 'react';
import "../Styling/Comments.css"

function Comments({personInfo}) {
    // where originially from, age, flatiron rating, currently live, hobbies, food
    console.log(personInfo);

    const ageInformation = personInfo?.map(person => person.age);
    const ratingInformation = personInfo?.map(person => person.flatiron_rating);
    const locationInformation = personInfo?.map(person => person.current_location);

    // const renderPerson = personInfo?.map(person => {
    //     return <CohortPerson key={person.id} person={person} handleImageClick={handleImageClick}/>
    // });

    // // Unique ages array
    // const ages = ageInformation?.filter((value, index, self) => {
    //     return self.indexOf(value) === index;
    // });

    return (
        <>
            <h1>Comments</h1>
            <form>
                <section>
                <div className="container">
                    <h2>New Comment</h2>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                            <input
                                type="number"
                                name="amount"
                                required="required"
                                // value={newContract.amount}
                                // onChange={handleChange}
                            />
                            <span className="text">Amount</span>
                            <span className="line"></span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="inputBox">
                            <input
                            type="text"
                            name="collateral"
                            required="required"
                            // value={newContract.collateral}
                            // onChange={handleChange}
                            />
                            <span className="text">Collateral</span>
                            <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                            <input
                            type="number"
                            name="duration"
                            required="required"
                            // value={newContract.duration}
                            // onChange={handleChange}
                            />
                            <span className="text">Duration</span>
                            <span className="line"></span>
                            </div>
                        </div>

                        <div className="col">
                            <div className="inputBox">
                            {/* <select onChange={handleSelect}> */}
                            <select>
                            <option value="none">Select a Lender</option>
                            <option value="1">Section A</option>
                            <option value="2">Section B</option>
                            <option value="3">Capital Two</option>
                            <option value="4">Silverman Sucks</option>
                            <option value="5">TT Bank</option>
                            </select>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                        <div className="col">
                            <div className="inputBox textarea">
                                <textarea
                                    style={{resize: "none"}}
                                    required="required"
                                    // onChange={handleChange}
                                    name="description"
                                    // value={newContract.description}
                                >
                                </textarea>
                                <span className="text">Description</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>

                    <div className="row100">
                    <div id="new-contract-button" className="col">
                        <button type="submit">Post a Comment</button>
                    </div>
                    </div>

                </div>
                </section>
            </form>
        </>
    );
}

export default Comments;