import React from 'react';
import CommentsCard from './CommentsCard';
import "../Styling/Comments.css";


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
            <section className="comment-list">
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
                <CommentsCard />
            </section>
        </>
    );
}

export default Comments;