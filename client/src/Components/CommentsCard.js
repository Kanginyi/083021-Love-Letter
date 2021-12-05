import React from 'react';
import "../Styling/CommentsCard.css";

function CommentsCard({firstName, lastName, comment, time}) {
    return (
        <article className="comments-card">
            <header className="comments-card-header">
                <h2>{firstName} {lastName}</h2>
                <p>{comment}</p>
                <p>{time}</p>
            </header>
        </article>
    );
}

export default CommentsCard;