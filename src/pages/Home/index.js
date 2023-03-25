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
// import styles from "./home.module.css";

const Home = () => {
	return (
		<>
			<Hero />
			<Slider
				title="Featured Movies"
				InnerComponent={Movie}
				settings={movieSliderSettings}
			/>
			<Slider
				title="New Arrival"
				InnerComponent={Movie}
				settings={movieSliderSettings}
			/>
			<Slider
				title="Exclusive Videos"
				InnerComponent={Video}
				settings={videoSliderSettings}
			/>
			<Slider
				title="Featured Casts"
				InnerComponent={Cast}
				settings={castSliderSettings}
			/>
		</>
	);
};

export default Home;
