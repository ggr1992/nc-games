import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import { fetchComments } from "./api";
import { postComment } from "./api";
import { useParams } from "react-router-dom";

function NewComment () {
const { review_id } = useParams();
const [newPostedComment, setNewPostedComment] = useState('')

const handleSumit = (event) => {
    event.preventDefault()
    postComment(review_id,username,body).then(() => {
        
    })
}

}

export default NewComment