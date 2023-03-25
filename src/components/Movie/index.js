import React from "react";
import { Link } from "react-router-dom";
import { HeartIcon, IMDBIcon, TomatoIcon } from "assets/svg";
import styles from "./movie.module.css";
import { useAppContext } from "context/AppContext";

const Movie = (props) => {
	const { imageConfig } = useAppContext();

	const year = new Date(props?.release_date).getFullYear();

	return (
		<Link to="#" className={styles.movie}>
			<div className={styles.movieImageWrapper}>
				<img
					src={`${imageConfig?.base_url}/original${props.poster_path}`}
					alt=""
					className={styles.movieImage}
				/>
				{/* <div className={`${styles.movieIcon} ${styles.movieLeftIcon}`}>
					<p className={styles.tag}>TV SERIES</p>
				</div> */}
				<div className={`${styles.movieIcon} ${styles.movieRightIcon}`}>
					<HeartIcon />
				</div>
			</div>
			<div className={styles.movieInfo}>
				<span className={styles.movieDate}>
					{props.original_language}, {year}
				</span>
				<h3 className={styles.movieName}>{props?.title}</h3>
				<div className={styles.rowContainer}>
					<div className={styles.row}>
						<IMDBIcon />
						<span className={styles.movieStat}>{props?.vote_average} / 10</span>
					</div>
					<div className={styles.row}>
						<TomatoIcon />
						<span className={styles.movieStat}>{props?.vote_count}</span>
					</div>
				</div>
				<div className={styles.movieGenre}>
					{props?.genre_ids.map((genre, index) => (
						<Genre genre={genre} key={genre} index={index} />
					))}
				</div>
			</div>
		</Link>
	);
};

export default Movie;

const Genre = ({ genre: genreID, index }) => {
	const { genres } = useAppContext();

	const selectedGenre = genres.find((genre) => genre.id === genreID)["name"];

	return (
		<span className={styles.movieGenre}>
			{index !== 0 && ", "}
			{selectedGenre}
		</span>
	);
};

export const movieSliderSettings = {
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
