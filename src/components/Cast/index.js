import React from "react";
import { Link } from "react-router-dom";
import styles from "./cast.module.css";
import { useAppContext } from "context/AppContext";

const Cast = (props) => {
	const { imageConfig } = useAppContext();

	return (
		<Link to="#" className={styles.cast}>
			<div className={styles.castImageWrapper}>
				<img
					src={`${imageConfig?.base_url}/original${props.profile_path}`}
					alt=""
					className={styles.castImage}
				/>
			</div>
			<div className={styles.castInfo}>
				<p className={styles.castName}>{props?.name}</p>
			</div>
		</Link>
	);
};

export default Cast;

export const castSliderSettings = {
	className: "castwrap",
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
