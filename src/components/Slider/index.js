import {
	HeartIcon,
	IMDBIcon,
	LeftArrowIcon,
	RightArrowIcon,
	TomatoIcon,
} from "assets/svg";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./slider.module.css";
import poster2 from "assets/poster2.png";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<RightArrowIcon
			onClick={onClick}
			style={style}
			className={`${className} ${styles.customRightArrow}`}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<LeftArrowIcon
			onClick={onClick}
			style={style}
			className={`${className} ${styles.customLeftArrow}`}
		/>
	);
}

const Slider = ({ title, link }) => {
	const settings = {
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		// autoplay: true,
		// autoplaySpeed: 5000,
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
	return (
		<div className={styles.sliderWrapper}>
			<div className={styles.sliderHeader}>
				<h2 className={styles.sliderTitle}>{title}</h2>
				<Link to={link ?? "#"} className={styles.link}>
					See more
					<RightArrowIcon />
				</Link>
			</div>

			<SlickSlider {...settings}>
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
				<Movie />
			</SlickSlider>
		</div>
	);
};

const Movie = () => {
	return (
		<Link to="#" className={styles.movie}>
			<div className={styles.movieImageWrapper}>
				<img src={poster2} alt="" className={styles.movieImage} />
				<div className={`${styles.movieIcon} ${styles.movieLeftIcon}`}>
					<p className={styles.tag}>TV SERIES</p>
				</div>
				<div className={`${styles.movieIcon} ${styles.movieRightIcon}`}>
					<HeartIcon />
				</div>
			</div>
			<div className={styles.movieInfo}>
				<span className={styles.movieDate}>USA, 2016 - Current</span>
				<h3 className={styles.movieName}>Stranger Things</h3>
				<div className={styles.rowContainer}>
					<div className={styles.row}>
						<IMDBIcon />
						<span className={styles.movieStat}>86.0 / 100</span>
					</div>
					<div className={styles.row}>
						<TomatoIcon />
						<span className={styles.movieStat}>97%</span>
					</div>
				</div>
				<div className={styles.movieGenre}>
					<span className={styles.movieGenre}>Action</span>
					<span className={styles.movieGenre}>, Adventure</span>
					<span className={styles.movieGenre}>, Horror</span>
				</div>
			</div>
		</Link>
	);
};

export default Slider;
