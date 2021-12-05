import React from 'react';
import "../Styling/CommentsCard.css";

function CommentsCard({firstName, lastName, comment, likes, dislikes, time}) {
    return (
        <article className="comments-card">
            <header className="comments-card-header">
                <h2>{firstName} {lastName}</h2>
                <p>{comment}</p>
                <p>{time}</p>
                <button>{likes} Likes</button>
                <button>{dislikes} Dislikes</button>
            </header>
        </article>
    );
}

export default CommentsCard;