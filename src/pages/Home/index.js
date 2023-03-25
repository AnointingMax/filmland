import { Hero, Slider } from "components";
import React from "react";
// import styles from "./home.module.css";

const Home = () => {
	return (
		<>
			<Hero />
			<Slider title="Featured Movies" />
			<Slider title="New Arrival" />
		</>
	);
};

export default Home;
