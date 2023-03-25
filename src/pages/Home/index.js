import {
	getCast,
	getLatestMovies,
	getPopularMovies,
	getTopRatedMovies,
} from "api";
import {
	Cast,
	castSliderSettings,
	Hero,
	Movie,
	movieSliderSettings,
	Slider,
	Video,
	videoSliderSettings,
} from "components";
import React from "react";

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
				queryFN={getLatestMovies}
				queryname="new-arrival"
			/>
			<Slider
				title="Exclusive Videos"
				InnerComponent={Video}
				settings={videoSliderSettings}
				queryFN={getTopRatedMovies}
				queryname="exclusive-videos"
			/>
			<Slider
				title="Featured Casts"
				InnerComponent={Cast}
				settings={castSliderSettings}
				queryFN={getCast}
				queryname="cast"
			/>
		</>
	);
};

export default Home;
