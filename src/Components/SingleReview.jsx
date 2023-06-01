import { useState,useEffect } from "react";
import { fetchSingleReview } from "./api";
import { useParams } from 'react-router-dom';
import { patchVotesIncrease } from "./api";
import { patchVotesDecrease } from "./api";
import Comments from "./Comments";
import {useRef} from 'react';

function SingleReview (props) {
  const commentsSection = useRef();
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
  const [voteCount, setVoteCount] = useState(0); 
      
    const [singleReview,setSingleReview] = useState('')
    useEffect(() => {
      fetchSingleReview(review_id).then((data) => {  
        setSingleReview(data.review)          
        setIsLoading(false)
        setVoteCount(data.review.votes)          
      });
    }, [review_id]);
    if(isLoading) return<p> ... Loading </p>

    
    const scrollToBottom = () => {
      window.scrollTo({
        top: 1050,
      });
    };
    
  const updateVoteUp = () => {
    setVoteCount((prevCount) => prevCount +  1 );
    patchVotesIncrease(review_id).then((votesCount) => {
      setVoteCount(votesCount)
  })
  };

  const updateVoteDown = () => {
    setVoteCount((prevCount) => prevCount - 1 );
    patchVotesDecrease(review_id).then((votesCount) => {
      setVoteCount(votesCount)
  })
  };
      
    const singleReviewArray = singleReview
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
            <button onClick={() => updateVoteUp()}>Increase Vote</button>
           <button onClick={() => updateVoteDown()}>Decrease Vote</button>
           <h4> Votes: {voteCount} </h4>
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



