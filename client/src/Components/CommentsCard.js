import React from 'react';
import "../Styling/CommentsCard.css";

function CommentsCard({firstName, lastName, comment, likes, dislikes, time}) {
    return (
        <article className="comments-card">
            <header>
                <div className="comments-card-header">
                    <h2>{firstName} {lastName}</h2>
                    <p>{comment}</p>
                </div>
                
                <div className="comments-card-button-container">
                    <button>{likes} Likes</button>
                    <button>{dislikes} Dislikes</button>
                </div>
                <div>
                    <p>{time}</p>
                </div>
            </header>
        </article>
    );
}

export default CommentsCard;