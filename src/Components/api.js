import axios from 'axios'


const reviewApi = axios.create({
    baseURL: "https://nc-games-project-evyy.onrender.com",
  });

export const fetchReviews = () => {
    return reviewApi
      .get("/api/reviews")
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  export const fetchComments = (review_id) => {
    return reviewApi
      .get(`/api/reviews/${review_id}/comments`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
  }