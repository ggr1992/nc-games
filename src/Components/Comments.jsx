import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import { fetchComments } from "./api";

function Comments (props) {
    console.log(props.singleReview)
    const { review_id } = useParams();
    const [comments, setComments] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    console.log(review_id)
    useEffect(() => {
        fetchComments(review_id).then(({comments}) => {  
           setComments(comments)          
           setIsLoading(false)          
        });
    }, [review_id]);
    if(isLoading) return<p> ... Loading </p>

    return (
        <> 
        <ul>
            {comments.map((comment)=> {
                return <li className="Comments" key={comment.comment_id}>
                     <h3>Author: {comment.author}</h3>
                     <h4>Votes: {comment.votes}</h4>
                     <h4>Comment</h4>
                     <h4>{comment.body}</h4>
                </li>

            })}
        </ul>
        </>
    )
}

export default Comments