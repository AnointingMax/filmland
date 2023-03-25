import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
	},
});

api.interceptors.response.use((response) => response.data, null);

export const getGenres = () => api.get("/genre/movie/list");

export const getConfig = () => api.get("/configuration");

export const getPopularMovies = () => api.get("/movie/popular");

export const getUpcomingMovies = () => api.get("/movie/upcoming");

export const getCast = () => api.get("/person/popular");
