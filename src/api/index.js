import axios from "axios";
const url = "https://diary-app.herokuapp.com/journal";

export const fetchPosts = () => axios.get(url)