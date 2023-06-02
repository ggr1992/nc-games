import { useState } from "react"
import { postComment } from "./api";
import { useParams } from "react-router-dom";

function NewComment ({setComments}) {
    const {review_id} = useParams()
    const [commentToBeSubmitted, setCommentToBeSubmitted] = useState('');
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        postComment(review_id,'jessjelly',commentToBeSubmitted).then((newMessageFromApi) => { 
            console.log(newMessageFromApi)
            setComments((currentComments) => {             
                return [newMessageFromApi, ...currentComments]
            })
            setCommentToBeSubmitted('')
            setIsSubmitSuccessful(true)
        })
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
            rows="3" cols="55" maxLength="180"
            type="text"
            id="comment"
            name="comment"
            value={commentToBeSubmitted}
            onChange={handleChange}
            required
          ></textarea>
         </label>
         <br></br>
          <button id="SubmitButton" type="submit">Submit</button>
        </form>
      );
}


export default NewComment