import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import { fetchComments } from "./api";

function Comments (props) {
 
    const { review_id } = useParams();
    const [comments, setComments] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchComments(review_id).then(({comments}) => {  
           setComments(comments)          
           setIsLoading(false)          
        });
    }, [review_id]);
    if(isLoading) return<p> ... Loading </p>

    return (
        <> 
        <ul className="comment-section">
            {comments.map((comment)=> {
                return <li className="Comments" key={comment.comment_id}>
                     <h4>Author: </h4>
                     <h3>  {comment.author}</h3>
                     <h4>Votes: </h4>
                     <h3>   {comment.votes}</h3>
                     <h4>Comment:</h4>
                     <h3>   {comment.body}</h3>
                </li>

            })}
        </ul>
        </>
    )
}

export default Comments