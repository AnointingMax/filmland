import { getPopularMovies, getUpcomingMovies } from "api";
import {
	// Cast,
	// castSliderSettings,
	Hero,
	Movie,
	movieSliderSettings,
	Slider,
	// Video,
	// videoSliderSettings,
} from "components";
import React from "react";
// import styles from "./home.module.css";

const Home = () => {
	return (
		<>
			<Hero />
			<Slider
				title="Featured Movies"
				InnerComponent={Movie}
				settings={movieSliderSettings}
				queryFN={getPopularMovies}
				queryname="featured"
			/>
			<Slider
				title="New Arrival"
				InnerComponent={Movie}
				settings={movieSliderSettings}
				queryFN={getUpcomingMovies}
				queryname="new-arrival"
			/>
			{/* <Slider
				title="Exclusive Videos"
				InnerComponent={Video}
				settings={videoSliderSettings}
				queryFN={}
			/> */}
			{/* <Slider
				title="Featured Casts"
				InnerComponent={Cast}
				settings={castSliderSettings}
				queryFN={}
			/> */}
		</>
	);
};

export default Home;
