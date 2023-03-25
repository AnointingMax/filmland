import React from "react";
import image from "assets/cast.png";
import { Link } from "react-router-dom";
import styles from "./cast.module.css";

const Cast = () => {
	return (
		<Link to="#" className={styles.cast}>
			<div className={styles.castImageWrapper}>
				<img src={image} alt="" className={styles.castImage} />
			</div>
			<div className={styles.castInfo}>
				<p className={styles.castName}>Keanu Reeves</p>
			</div>
		</Link>
	);
};

export default Cast;

export const castSliderSettings = {
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 425,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
