import axios from "axios";
import CONFIG from "../config";

const getMovies = ({ title }) => {
  const { BASE_URL, API_KEY } = CONFIG;

  return axios.get(`${BASE_URL}?s=${title}&apikey=${API_KEY}`);
};

const getDetails = ({ movieId }) => {
  const { BASE_URL, API_KEY } = CONFIG;

  return axios.get(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`);
}

export { getMovies, getDetails };
