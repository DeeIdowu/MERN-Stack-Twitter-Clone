import axios from "axios";

export default function(token) {
  if (token) {
    //I've console logged the token, the token is working, the request isnt.
    axios.defaults.headers.common["Authorization"] = "Bearer" + token;
  } else {
    axios.defaults.headers.common["Authorization"] = null;
  }
}
