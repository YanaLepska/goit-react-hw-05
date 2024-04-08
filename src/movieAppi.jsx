import axios from "axios";

const API_KEY = "5a79f526ca82e731fc82d492019e4cc5";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  params: {
    headers: { accept: "application/json"},
    api_key: API_KEY,
    language: "en-US",
  },
};

export const requestMovie = async () => {
  const response = await axios.get(
    "/trending/movie/day",
    options
  );
  return response;
};

export const requestMovieByQuery = async (query) => {
  const response = await axios.get(
    `/search/movie?query=${query}`,
    options
  );
  return response;
};

export const requestMovieId = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}`,
    options
  );
  return response;
};

export const requestMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits`,
    options
  );
  return response;
};

export const requestMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews`,
    options
  );
  return response;
};
