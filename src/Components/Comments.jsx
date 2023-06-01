import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import { fetchComments } from "./api";

function Comments (props) {
 
    const { review_id } = useParams();
    const [comments, setComments] = useState('')

    useEffect(() => {
        fetchComments(review_id).then(({comments}) => {  
           setComments(comments)                      
        });
    }, [review_id]);
   
    if(comments) {
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
    }   else {
        return (
            <>
            <p>No Comments</p>
            </>
        )
    }

    }

export default Comments