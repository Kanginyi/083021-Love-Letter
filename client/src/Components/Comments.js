import React, {useState, useEffect} from 'react';
import CommentsCard from './CommentsCard';
import "../Styling/Comments.css";

import {BsArrowDownCircle} from "react-icons/bs";


function Comments() {
    // Fetch comments information
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        fetch("/comments")
            .then(resp => resp.json())
            .then(data => {
                data?.map(comment => comment.created_at = (new Date(comment.created_at)));
                setCommentData(data);
            })
    }, []);

    const renderComments = commentData?.map(comment => {
        return <CommentsCard
            key={comment.id}
            commentInfo={comment}
            // commentData={[commentData]}
            setCommentData={setCommentData}
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
            .then(data => {
                data.created_at = (new Date(data.created_at));
                return setCommentData([...commentData, data])
            })
        
        setNewComment({
            first_name: "", last_name: "", comment: ""
        });
    }

    // Comments Search Filter
    const [searchValue, setSearchValue] = useState("");

    const search = e => {
        setSearchValue(e.target.value);
    }

    const filterComments = searchValue === "" ? renderComments : renderComments?.filter(comment => comment?.props?.commentInfo?.first_name?.toLowerCase().includes(searchValue.toLowerCase()) || comment?.props?.commentInfo?.last_name?.toLowerCase().includes(searchValue.toLowerCase()));

    const sortComments = filterComments?.sort((a, b) => (a.props?.commentInfo?.created_at - b.props?.commentInfo?.created_at));

    const centerCards = () => {
        const commentsList = document.querySelector(".comment-list");

        if (sortComments?.length < 10) {
            commentsList?.classList.add("center-comments-cards");
        } else if (sortComments?.length > 10) {
            commentsList?.classList.remove("center-comments-cards");
        }
    }
    centerCards();


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
                        <div id="new-comment-button" className="col">
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

            <h2>Shift + Scroll to Look Through The Comments</h2>
            
        </div>

        <div id="click-here-for-comments">
            <a href="#show-comments" title="Let's read some comments"><BsArrowDownCircle/></a>
        </div>

        {/* Where the comments are rendered */}
        <section id="show-comments" className="comment-list">
            {sortComments}
        </section>

        </>
    );
}

export default Comments;