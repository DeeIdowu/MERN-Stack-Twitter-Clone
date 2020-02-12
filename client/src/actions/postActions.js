import axios from "axios";
import { ADD_POST } from "../constants";

export const addPost = postData => dispatch => {
  axios
    .post("http://localhost:5000/api/posts/add", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
