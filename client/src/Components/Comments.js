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

    const renderComments = commentData?.map(comment => {
        return <CommentsCard
            firstName={comment.first_name}
            lastName={comment.last_name}
            comment={comment.comment}
            likes={comment.likes}
            dislikes={comment.dislikes}
            time={comment.created_at}
        />
    })

    //  Comments Form
    const [newComment, setNewComment] = useState({
        first_name: "",
        last_name: "",
        comment: "",
        likes: 0,
        dislikes: 0
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

    // Comments Search Filter
    const [searchValue, setSearchValue] = useState("");

    const search = e => {
        setSearchValue(e.target.value);
    }

    const filterComments = searchValue === "" ? renderComments : renderComments?.filter(comment => comment?.props?.firstName.toLowerCase()?.includes(searchValue.toLowerCase()) || comment?.props?.lastName.toLowerCase()?.includes(searchValue.toLowerCase()));

    return (
        <>
        {/* Submission Form */}
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
            <section>

            <div className="comment-form-parent">
                <div className="container">
                    <h2 id="typing-demo">Add a Comment :^)</h2>
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
            </div>

            </section>
            </form>
        </div><br/>

        {/* Search Bar */}
        <div id="comments-search-container">
            <label>
                <input
                    onChange={search}
                    type="text"
                    id="comments-search-bar"
                    name="search"
                    placeholder="Search Comments"
                    autoComplete="off"
                >
                </input>
            </label>
        </div>

        {/* Where the comments are rendered */}
        <section className="comment-list">
            {filterComments}
        </section>

        </>
    );
}

export default Comments;