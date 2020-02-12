import { ADD_POST, LOADING_POSTS } from "../constants";

const initialState = {
  list: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case "LOADING_POSTS":
      return {
        ...state,
        loading: true
      };

    case "GET_POSTS":
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    default:
      return state;
  }
}
