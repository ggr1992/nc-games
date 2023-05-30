import { useState,useEffect } from "react";
import { fetchReviews } from "./api";

function Reviews (props) {
    useEffect(() => {
        fetchReviews().then(({reviews}) => {  
            props.setReviews(reviews)        
        });
    }, []);

    const reviewArray = props.reviews
    console.log(reviewArray)
    
    return (
        <>
        <ul>
            {reviewArray.map((review) => {
                return <li className="Reviews" key={review.review_id}>
                    <h3>{review.title}</h3>
                    <h4>Designer: {review.designer}</h4>
                    <img src={review.review_img_url} width="150px" height="150px"></img>
                    <h5>Category: {review.category}</h5>
                    <h5>Owner: {review.owner}</h5>
                    <h5>Comment Count: {review.comment_count}</h5>
                </li>
            })}
        </ul>
        </>
    )
}

export default Reviews