import React, {useState, useEffect} from 'react';
import CommentsCard from './CommentsCard';
import "../Styling/Comments.css";


function Comments() {
    // Fetch comments information
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        fetch("/comments")
            .then(resp => resp.json())
            .then(data => setCommentData(data))
    }, []);

    const [newComment, setNewComment] = useState({
        first_name: "",
        last_name: "",
        comment: ""
    });

    const handleChange = e => {
        setNewComment({...newComment, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch("/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newComment)
        })
            .then(resp => resp.json())
            .then(data => setCommentData([...commentData, data]))
        
        setNewComment({
            first_name: "", last_name: "", comment: ""
        });
    }

    return (
        <>

        {/* Submission Form */}
        <div>
            <form onSubmit={handleSubmit}>
            <section>

            <div className="container">
                <h2>Add a Comment!</h2>
                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                        <input
                            type="text"
                            name="first_name"
                            required="required"
                            value={newComment.first_name}
                            onChange={handleChange}
                        />
                        <span className="text">First Name</span>
                        <span className="line"></span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="inputBox">
                        <input
                        type="text"
                        name="last_name"
                        required="required"
                        value={newComment.last_name}
                        onChange={handleChange}
                        />
                        <span className="text">Last Name</span>
                        <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div className="col">
                        <div className="inputBox textarea">
                            <textarea
                                style={{resize: "none"}}
                                required="required"
                                onChange={(handleChange)}
                                name="comment"
                                value={newComment.comment}
                            ></textarea>
                            <span className="text">Comment</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>

                <div className="row100">
                    <div id="new-contract-button" className="col">
                        <button type="submit">Post Your Comment</button>
                    </div>
                </div>

            </div>
            </section>
            </form>
            </div>

            {/* Where the comments are rendered */}
            <section className="comment-list">
                {
                    commentData?.map(comment => {
                        return <CommentsCard
                            firstName={comment.first_name}
                            lastName={comment.last_name}
                            comment={comment.comment}
                            time={comment.created_at}
                        />
                    })
                }
            </section>
        </>
    );
}

export default Comments;