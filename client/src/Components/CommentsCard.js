import React from 'react';
import "../Styling/CommentsCard.css";

function CommentsCard({firstName, lastName, comment, likes, dislikes, time}) {
    return (
        <article className="comments-card">
            <header className="comments-card-header">
                <h2>{firstName} {lastName}</h2>
                <p>{comment}</p>
                <p>{time}</p>
                <div className="comments-card-button-container">
                    <button>{likes} Likes</button>
                    <button>{dislikes} Dislikes</button>
                </div>
            </header>
        </article>
    );
}

export default CommentsCard;