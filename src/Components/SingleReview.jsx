import { useState,useEffect } from "react";
import { fetchSingleReview } from "./api";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Comments from "./Comments";
import {useRef} from 'react';


function SingleReview (props) {
    const commentsSection = useRef();
    const { review_id } = useParams();
    const [isLoading, setIsLoading] = useState(true)


    const [singleReview,setSingleReview] = useState('')
    useEffect(() => {
        fetchSingleReview(review_id).then((data) => {  
           setSingleReview(data.review)          
           setIsLoading(false)          
        });
    }, [review_id]);

    if(isLoading) return<p> ... Loading </p>


      const scrollToBottom = () => {
        window.scrollTo({
          top: 1050,
        });
      };
    

    const singleReviewArray = singleReview
    console.log(singleReview)
    return (
        <main>    
        <ul className="Review">
            <button onClick={scrollToBottom}>View Comments</button> 
           <h2>
            {singleReviewArray.title}
            </h2> 
            <img src={singleReviewArray.review_img_url} width="200px" height="200px"></img>      
            <h3>
            Category: {singleReviewArray.category}
            </h3>
           <h4> Created: {singleReviewArray.created_at}  </h4> 
           <h4> Designer: {singleReviewArray.designer} </h4>
           <h4> Owner: {singleReviewArray.owner} </h4> 
           <h4>Review</h4>
           <h4> {singleReviewArray.review_body} </h4> 
            <h4>Title {singleReviewArray.title} </h4>
           <h4> Votes: {singleReviewArray.votes} </h4>
        </ul>
        <div ref={commentsSection}>
            <header >
                <h4 id="CommentHeader">COMMENTS</h4>
            </header>
        <Comments/>     
        </div>
        </main >
    )
}


export default SingleReview



