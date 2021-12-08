import React, {useState} from 'react';
import "../Styling/CommentsCard.css";

function CommentsCard({commentInfo, commentData, setCommentData}) {
    const {id, likes, dislikes, created_at, first_name, last_name, comment} = commentInfo;

    const [isClicked, setIsClicked] = useState(1);

    const [commentsLikes, setCommentsLikes] = useState(likes);
    const [commentsDislikes, setCommentsDislikes] = useState(dislikes);
    

    const handleLikes = () => {
        fetch(`/comments/likes/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            // body: JSON.stringify({likes: commentsLikes + 1})
        })
            .then(resp => resp.json())
            .then(data => setCommentsLikes(() => data.likes))

        if (isClicked === 3) {
            fetch(`/comments/minus_dislikes/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                // body: JSON.stringify({dislikes: commentsDislikes + 1})
            })
                .then(resp => resp.json())
                .then(data => setCommentsDislikes(() => data.dislikes))
        }

        setIsClicked(2);
    
    }

    const handleDislikes = () => {
        fetch(`/comments/dislikes/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            // body: JSON.stringify({likes: commentsDislikes - 1})
        })
            .then(resp => resp.json())
            .then(data => setCommentsDislikes(() => data.dislikes))

        if (isClicked === 2) {
            fetch(`/comments/minus_likes/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                // body: JSON.stringify({likes: commentsLikes - 1})
            })
                .then(resp => resp.json())
                .then(data => setCommentsLikes(() => data.likes))
        }

        setIsClicked(3);
    }

    const noPressed = <>
                        <button
                            className="like-button-hover"
                            onClick={handleLikes}
                        >{commentsLikes} Likes
                        </button>

                        <button
                            className="dislike-button-hover"
                            onClick={handleDislikes}
                        >{commentsDislikes} Dislikes
                        </button>
                    </>

    const likesPressed = <>
                    <button
                        id="like-pressed"
                        className="like-button-hover"
                        disabled="disabled"
                        onClick={handleLikes}
                    >{commentsLikes} Likes
                    </button> 

                    <button
                        className="dislike-button-hover"
                        onClick={handleDislikes}
                    >{commentsDislikes} Dislikes
                    </button>
                </>

    const dislikesPressed = <>
                    <button
                        className="like-button-hover"
                        onClick={handleLikes}
                    >{commentsLikes} Likes
                    </button>

                    <button
                        id="dislike-pressed"
                        className="dislike-button-hover"
                        disabled="disabled"
                        onClick={handleDislikes}
                    >{commentsDislikes} Dislikes
                    </button>
                </>

    return (
        <article className="comments-card">
                <div className="comments-card-header">
                    <h2>{first_name} {last_name}</h2>
                    <div className="comments-card-content">
                        <p>{comment}</p>
                    </div>
                    <div className="comments-card-button-container">
                        {isClicked === 1 ? noPressed :
                        isClicked === 2 ? likesPressed :
                        dislikesPressed}
                    </div>
                </div>
                
                <div className="comments-card-date">
                    <p>Posted at {created_at.toLocaleString()} </p>
                </div>
        </article>
    );
}

export default CommentsCard;