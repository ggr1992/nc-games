import { useState } from "react"
import { postComment } from "./api";
import { useParams } from "react-router-dom";

function NewComment ({setComments}) {
    const {review_id} = useParams()
    const [commentToBeSubmitted, setCommentToBeSubmitted] = useState('');
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        postComment(review_id,'jessjelly',commentToBeSubmitted).then((newMessageFromApi) => { 
            console.log(newMessageFromApi)
            setComments((currentComments) => {             
                return [newMessageFromApi, ...currentComments]
            })
            setCommentToBeSubmitted('')
            setIsSubmitting(false);
            setIsSubmitSuccessful(true)
        }) .catch((error) => {
            setError('Failed to submit comment. Please try again.');
            setIsSubmitting(false);
          });
    }
    const handleChange = (event) => {
        const { value } = event.target;
        setCommentToBeSubmitted(value)
    }
    function resetForm() {
        setIsSubmitSuccessful(false);
        
      }
    if(isSubmitSuccessful) return (<div>
        <p>Submit successful</p>
        <button id="SubmitButton" type="submit" onClick={resetForm}>Add a new comment</button>
        </div>
        )
    
    return (
        <form onSubmit={handleSubmit}>
          
          <label htmlFor="comment" id="SubmitNewCommentHeader">Submit a New Comment
          <br></br>    
          <textarea
            maxLength="180"
            type="text"
            id="comment"
            name="comment"
            value={commentToBeSubmitted}
            onChange={handleChange}
            required
          ></textarea>
         </label>
         <br></br>
          <button id="SubmitButton" disabled={isSubmitting} type="submit"> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
          {error && <p>{error}</p>}
        </form>
      );
}


export default NewComment