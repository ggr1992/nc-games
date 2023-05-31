import { useState,useEffect } from "react";
import { fetchReviews } from "./api";
import { Link } from "react-router-dom";
import SingleReview from "./SingleReview";

function Reviews (props) {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchReviews().then(({reviews}) => {  
            props.setReviews(reviews)   
            setIsLoading(false)       
        });
    }, []);

    const reviewArray = props.reviews
    if(isLoading) return<p> ... Loading </p>
    
    
    return (
        <>
        <ul>
            {reviewArray.map((review) => {
                return <li className="Reviews" key={review.review_id}>
                    <Link to={`/reviews/${review.review_id}`}>{review.title} </Link>
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